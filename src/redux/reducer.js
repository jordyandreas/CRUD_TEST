const initialState = {
    Id:"",
    FirstName: "",
    LastName: "",
    Age: "",
    Photo: "",
    DataContact: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "ID":
            return {
                ...state,
                Id: action.payload
            }

        case "FIRSTNAME":
            return {
                ...state,
                FirstName: action.payload
            }

        case "LASTNAME":
            return {
                ...state,
                LastName: action.payload
            }

        case "AGE":
            return {
                ...state,
                Age: action.payload
            }

        case "PHOTO":
            return {
                ...state,
                Photo: action.payload
            }

        case "DATACONTACT":
            return {
                ...state,
                DataContact: action.payload
            }

        default:
            return state
    }
}