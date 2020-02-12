interface Person {
  number: number;
  name: string;
  age: string;
  gender: string;
  bedSideTableStatus: boolean;
}

interface Couple {
  coupleSelected: boolean;
  couple: Array<number>;
}

interface Pets {
  isExisting: boolean;
  list: Array<string>;
}

export interface SystemState {
  people: Person[];
  couple: Couple;
  bedSideTables: number;
  pets: Pets;
}

export const SET_NAME = "SET_NAME";
export const SET_AGE = "SET_AGE";
export const SET_GENDER = "SET_GENDER";
export const SET_PEOPLE_NUMBER = "SET_PEOPLE_NUMBER";
export const SET_PERSON_IN_COUPLE = "SET_PERSON_IN_COUPLE";
export const SET_BED_SIDE_TABLE_STATUS = "SET_BED_SIDE_TABLE_STATUS";
export const SET_PETS_EXISTING_STATUS = "SET_PETS_EXISTING_STATUS";

interface SetPeopleNumberAction {
  type: typeof SET_PEOPLE_NUMBER;
  number: number;
}

interface SetNameAction {
  type: typeof SET_NAME;
  name: string;
  number: number;
}

interface SetAgeAction {
  type: typeof SET_AGE;
  age: string;
  number: number;
}

interface SetGenderAction {
  type: typeof SET_GENDER;
  gender: string;
  number: number;
}

interface SetPersonInCoupleAction {
  type: typeof SET_PERSON_IN_COUPLE;
  number: number | null;
}

interface SetBedSideTableStatusAction {
  type: typeof SET_BED_SIDE_TABLE_STATUS;
  number: number;
}

interface SetPetsExistingStatusAction {
  type: typeof SET_PETS_EXISTING_STATUS;
}

export type PeopleActionTypes =
  | SetPeopleNumberAction
  | SetNameAction
  | SetAgeAction
  | SetGenderAction
  | SetPersonInCoupleAction
  | SetBedSideTableStatusAction
  | SetPetsExistingStatusAction;
