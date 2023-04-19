import { Employee } from "./Employee"
import "./EmployeeList.css"
import { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(
        ()=> {
            fetch ("http://localhost:8088/users?isStaff=true")
            .then(r=>r.json())
            .then((employeeArray)=>{
                setEmployees(employeeArray)
            })
        },
        []
    )

    return <article className="employees">
    {
        employees.map(employee => <Employee key={`employee--${employee.id}`}
            id={employee.id} 
            fullName={employee.fullName} 
            email={employee.email}/>)
    }
    </article>
}