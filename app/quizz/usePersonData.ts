import * as React from 'react';
import {allEmployees} from "./data/PlayerData";
import {Person} from "./data/Person";
import {Name} from "./data/Name";


function updatePersons(persons, currentEmployee, name) {
    return persons.map(person => person.id === currentEmployee.id ? {...currentEmployee, name: name} : person);
}

type updateName = (person: Person, name: Name) => void;

export const usePersonData: () => [Person[], updateName] = () => {
    const [persons, setEmployees] = React.useState(allEmployees.sort(() => Math.random() - 0.5));
    return [persons, ((person, name) => setEmployees(updatePersons(persons,person,name)))]
};