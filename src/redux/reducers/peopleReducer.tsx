import produce from "immer";
import {
  PeopleActionTypes,
  SET_AGE, SET_BED_SIDE_TABLE_STATUS,
  SET_GENDER,
  SET_NAME,
  SET_PEOPLE_NUMBER,
  SET_PERSON_IN_COUPLE, SET_PETS_EXISTING_STATUS,
  SystemState
} from "./types";

let initialState: SystemState = {
  people: [
    { number: 0, name: "", age: "", gender: "М", bedSideTableStatus: true }
  ],
  couple: { coupleSelected: false, couple: [] },
  bedSideTables: 0,
  pets: {
    isExisting: false,
    list: []
  }
};

const peopleReducer = (state = initialState, action: PeopleActionTypes) : SystemState =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case SET_PEOPLE_NUMBER:
        if (action.number > draft.people.length) {
          let i = draft.people.length;
          while (i < action.number) {
            draft.people = [
              ...draft.people,
              {
                number: i,
                name: "",
                age: "",
                gender: "М",
                bedSideTableStatus: true
              }
            ];
            i++;
          }
        } else if (action.number < draft.people.length) {
          draft.people.splice(action.number);
        }
        break;
      case SET_PERSON_IN_COUPLE:
        if (action.number === null)
          draft.couple = { coupleSelected: false, couple: [] };
        else if (
          draft.couple.couple.includes(action.number) &&
          draft.couple.couple.length === 1
        )
          draft.couple = { coupleSelected: false, couple: [] };
        else if (
          !draft.couple.couple.includes(action.number) &&
          draft.couple.couple.length === 1
        ) {
          draft.couple.coupleSelected = true;
          draft.couple.couple = [...draft.couple.couple, action.number];
        } else draft.couple.couple = [...draft.couple.couple, action.number];
        break;
      case SET_NAME:
        draft.people[action.number].name = action.name;
        break;
      case SET_AGE:
        draft.people[action.number].age = action.age;
        break;
      case SET_GENDER:
        draft.people[action.number].gender = action.gender;
        break;
      case SET_BED_SIDE_TABLE_STATUS:
        draft.people[action.number].bedSideTableStatus = false;
        break;
      case SET_PETS_EXISTING_STATUS:
        draft.pets.isExisting = true;
        break;
    }
  });

export default peopleReducer;
