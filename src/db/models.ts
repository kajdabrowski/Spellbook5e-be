export interface User {
  id: string;
  email: string;
  password: string;
  characterList: Character[];
}

export interface Character {
  id: string,
  name: string,
  spellList: string[],
}