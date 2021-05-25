let state = {
    person: [
        {
            fullName: "SK Sharma",
            email: "sk@xyz.com",
            contactNumber: "9090909090",
            details: "Hi, This is SK Sharma. My mail id is sk@xyz.com. Please contact me on 9090909090"
        },
        {
            fullName: "PK Sharma",
            email: "pk@xyz.com",
            contactNumber: "80808080",
            details: "Hi, This is PK Sharma. My mail id is pk@xyz.com. Please contact me on 80808080"
        },
    ]
}

export function getPerson() {
    return new Promise((resolve) => setTimeout(() => resolve(state.person), 1000));
}

export function addPerson(person) {
    return new Promise((resolve) => setTimeout(() => {
        state.person = [...state.person, person] ;
        resolve(true);
    }, 1000));
}