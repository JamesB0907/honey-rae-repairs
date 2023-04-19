import { Customer } from "./Customer"
import "./CustomerList.css"
import { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        ()=> {
            fetch (`http://localhost:8088/customers?_expand=user`)
            .then(r=>r.json())
            .then((customerArray)=>{
                setCustomers(customerArray)
            })
        },
        []
    )

    return (
        <div>
            <h2 className="customersTitle">Customers</h2>
            <article className="customers">
            {customers.map(customer => (
                <section className="customer" key={`customer--${customer.id}`}>
                      <Customer customer={customer} />
                </section>
            ))}
            </article>
        </div>
        )
    }