import produce from "immer";

const SET_NAME = "SET_NAME",
  SET_AGE = "SET_AGE",
  SET_GENDER = "SET_GENDER",
  SET_PEOPLE_NUMBER = "SET_PEOPLE_NUMBER",
  SET_PERSON_IN_COUPLE = "SET_PERSON_IN_COUPLE";

let initialState = {
  people: [{ number: 0, name: "", age: "", gender: "М" }],
  couple: { coupleSelected: false, couple: [] }
};

const peopleReducer = (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case SET_PEOPLE_NUMBER:
        if (action.number > draft.people.length) {
          let i = draft.people.length;
          while (i < action.number) {
            draft.people = [
              ...draft.people,
              { number: i, name: "", age: "", gender: "М" }
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
    }
  });

export const setPeopleNumber = number => ({ type: SET_PEOPLE_NUMBER, number });
export const setName = (name, number) => ({ type: SET_NAME, name, number });
export const setAge = (age, number) => ({ type: SET_AGE, age, number });
export const setGender = (gender, number) => ({
  type: SET_GENDER,
  gender,
  number
});
export const setPersonInCouple = (number = null) => ({
  type: SET_PERSON_IN_COUPLE,
  number
});

export default peopleReducer;
