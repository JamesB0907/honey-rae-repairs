import { Link } from "react-router-dom"

export const Customer = ({customer}) => {
    return <section className="customer">
    <div>
        Name: <Link to={`/customers/${customer.id}`}> {customer.user.fullName}</Link>
    </div>
    <div className="customer__info">Address: {customer.address}</div>
    <div className="customer__info">Phone Number: {customer.phoneNumber}</div>
    
            </section>
}