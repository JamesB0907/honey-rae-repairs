import "./CustomerList.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const CustomerDetails = () => {

    const {customerId} = useParams([])
    const [customer, updateCustomer] = useState([])

    useEffect(
        () => {
        fetch(`http://localhost:8088/customers/${customerId}?_expand=user`)
            .then(r=>r.json())
            .then(updateCustomer)
            
        },
        [customerId]
    )

    return<section className="customer">
    <header className="customer__header">{customer?.user?.fullName}</header>
        <div>Phone Number: {customer.phoneNumber}</div>
        <div>Address: {customer.address}</div>
    <footer className="customer__footer">{customer?.user?.email}</footer>
            </section>
}