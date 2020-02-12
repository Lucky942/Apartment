import {
    PeopleActionTypes,
    SET_AGE,
    SET_BED_SIDE_TABLE_STATUS,
    SET_GENDER,
    SET_NAME,
    SET_PEOPLE_NUMBER,
    SET_PERSON_IN_COUPLE, SET_PETS_EXISTING_STATUS
} from "./types";

export const setPeopleNumber = (number: number) : PeopleActionTypes => ({ type: SET_PEOPLE_NUMBER, number });
export const setName = (name: string, number: number) : PeopleActionTypes => ({ type: SET_NAME, name, number });
export const setAge = (age: string, number: number) : PeopleActionTypes => ({ type: SET_AGE, age, number });
export const setGender = (gender: string, number: number) : PeopleActionTypes => ({
    type: SET_GENDER,
    gender,
    number
});
export const setPersonInCouple = (number: number | null = null) : PeopleActionTypes => ({
    type: SET_PERSON_IN_COUPLE,
    number
});
export const setBedSideTableStatus = (number: number) : PeopleActionTypes => ({
    type: SET_BED_SIDE_TABLE_STATUS,
    number
});
export const setPetsExistingStatus = () : PeopleActionTypes => ({ type: SET_PETS_EXISTING_STATUS });
