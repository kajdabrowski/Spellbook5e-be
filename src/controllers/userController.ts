import { RequestHandler } from "express";
import { db } from "../db/client";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

const userRef = db.collection("users");
// console.log(userRef);

export const registerUser: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userId = uuidv4();
    // const userRef = db.collection("users");
    const userSnapshot = await userRef.doc(email).get();

    if (userSnapshot.data()) {
      res.json({ message: "E-mail already exists" });
    } else {
      const response = await userRef.doc(email).set({
        id: userId,
        password: hashedPassword,
        email: email,
        characterList: [],
      });
      console.log(response);

      res.json({ message: "User successfully registered" });
    }
  } catch (error) {
    res.json({ error });
  }
};

export const loginUser: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const snapshot = await userRef.doc(email).get();
    const user = snapshot.data();
    console.log(user);

    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      const payload = {
        id: user.id,
        email: user.email,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      res.json({ token, user });
    }
  } catch (error) {
    res.json({ error });
  }
};

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const querySnapshot = await db
      .collection("users")
      //@ts-ignore
      .doc(req.user.email)
      .get();
    res.json({ users: querySnapshot.data() });
  } catch (error) {
    res.json({ error });
  }
};

export const removeUser: RequestHandler = async (req, res, next) => {
  try {
    //@ts-ignore
    await db.collection("users").doc(req.user.email).delete();
    res.json({ message: "User successfully deleted" });
  } catch (error) {
    next(error);
  }
};