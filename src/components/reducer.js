const initialstate = {
  employees: [
    { id: 1, Name: "Dhruv", Email: "1@gmail.com" },
    { id: 2, Name: "Jay", Email: "2@gmail.com" },
    { id: 3, Name: "Lk", Email: "3@gmail.com" }
  ]
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "GET_EMPLOYEE":
      return {
        ...state
      };
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(action.payload)
      };
    case "EDIT_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.map((content, i) =>
          content.id === action.payload.id
            ? {
              ...content,
              Name: action.payload.Name,
              Email: action.payload.Email
            }
            : content
        )
      };
    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter((item) => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
