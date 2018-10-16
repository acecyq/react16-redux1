const startState = {
    persons: []
};

export default (state = startState, action) => {
    switch (action.type) {
        case 'ADD':
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.data.name,
                age: action.data.age
            };
            return {
                persons: [...state.persons, newPerson]
            };
        case 'DEL':
            const newPersons = state.persons.filter(el => el.id !== action.id);
            return {
                persons: newPersons
            }
        default:
            return state;
    }
}