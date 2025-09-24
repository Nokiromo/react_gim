import ClientListItem from "../client-list-item/client-list-item"
import './client-list.css'

const ClientList = ({data, onDelete, onToggleProp}) =>{

    const elements = data.map(e =>{
        const {id, ...eProps} = e
        return(
            <ClientListItem 
            key={id}
            {...eProps}
            onDelite={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            
            />
        )
    })


    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default ClientList