import produce from "immer";

const SET_NAME = "SET_NAME",
  SET_AGE = "SET_AGE",
  SET_GENDER = "SET_GENDER",
  SET_PEOPLE_NUMBER = "SET_PEOPLE_NUMBER";

let initialState = {
  people: [{ number: 0, name: "", age: "", gender: "М" }]
};

/*const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PEOPLE_NUMBER:
      let stateCopy = { ...state };
      stateCopy.people = [...state.people];
      if (action.number > state.people.length) {
        let i = state.people.length;
        while (i < action.number) {
          stateCopy.people = [
            ...stateCopy.people,
            { number: i, name: null, age: null, gender: null }
          ];
          i++;
        }
      } else {
        stateCopy.people.splice(action.number - 1);
      }
      return stateCopy;
    default:
      return state;
  }
};*/

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

export default peopleReducer;
