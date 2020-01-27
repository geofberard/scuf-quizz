import * as React from 'react';
import {allEmployees} from "./data/EmployeeData";
import {Employee} from "./data/Employee";
import {Name} from "./data/Name";


function updateEmployees(employees, currentEmployee, name) {
    return employees.map(employee => employee.id === currentEmployee.id ? {...currentEmployee, name: name} : employee);
}

type updateName = (employee: Employee, name: Name) => void;

export const useEmployeeData: () => [Employee[], updateName] = () => {
    const [employees, setEmployees] = React.useState(allEmployees.sort(() => Math.random() - 0.5));
    return [employees, ((employee, name) => setEmployees(updateEmployees(employees,employee,name)))]
};