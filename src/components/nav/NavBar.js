import "./NavBar.css"
import { EmployeeNav } from "./EmployeeNav"
import { CustomerNav } from "./CustomerNav"

export const NavBar = () => {
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)
	
    if (honeyUserObject.staff) {
        //Return employee navbar
        return <EmployeeNav />
    }
    else {
        //Return customer navbar
        return <CustomerNav />
    }
}


