export function setId(Id) {
    return {
        type: "ID",
        payload: Id
    };
}

export function setFirstName(FirstName) {
    return {
        type: "FIRSTNAME",
        payload: FirstName
    };
}

export function setLastName(LastName) {
    return {
        type: "LASTNAME",
        payload: LastName
    };
}

export function setAge(setAge) {
    return {
        type: "AGE",
        payload: setAge
    };
}

export function setPhoto(Photo) {
    return {
        type: "PHOTO",
        payload: Photo
    };
}

export function setDataContact(DataContact) {
    return {
        type: "DATACONTACT",
        payload: DataContact
    };
}