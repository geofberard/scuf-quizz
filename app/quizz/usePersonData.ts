import * as React from 'react';
import {getAllEmployees} from "./data/PlayerData";
import {Person} from "./data/Person";
import {Name} from "./data/Name";


function updatePersons(persons, currentEmployee, name) {
    return persons.map(person => person.id === currentEmployee.id ? {...currentEmployee, name: name} : person);
}

type updateName = (person: Person, name: Name) => void;

export const usePersonData: (compareFn: (a: Person, b: Person) => number) => [Person[], updateName] = (compareFn) => {
    const [persons, setEmployees] = React.useState(getAllEmployees().sort(compareFn));
    return [persons, ((person, name) => setEmployees(updatePersons(persons, person, name)))]
};