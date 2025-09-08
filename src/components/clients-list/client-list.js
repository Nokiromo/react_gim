import ClientListItem from "../client-list-item/client-list-item"
import './client-list.css'

const ClientList = () =>{
    return(
        <ul className="app-list list-group">
            <ClientListItem/>
            <ClientListItem/>
            <ClientListItem/>
        </ul>
    )
}

export default ClientList