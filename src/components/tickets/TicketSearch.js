export const TicketSearch = ({setterFunction}) => {
    return(
        <div>
            <input 
            onChange={
                (evt) => {
                    setterFunction(evt.target.value)
                }
            }
            type="text" placeholder="Enter Your Search Here"></input>
        </div>
    )
}