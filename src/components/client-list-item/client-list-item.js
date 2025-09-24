import './client-list-item.css'

const ClientListItem = (props) =>  {

        const {name, currentMembership, onDelite, onToggleProp, increase, like} = props;
        
        let classNames = 'list-group-item d-flex justify-content-between'
        if(increase){
                classNames += ' increase'
        }
        if(like){
                classNames += ' like'
        }
        
    return (
        <li className= {classNames}>
            <span onClick={onToggleProp} data-toggle="like" className="list-group-item-label">{name} </span>
            <input type="text" className="list-group-item-input" defaultValue={currentMembership} />
            <div className="d-flex justify-content-center align-items-center">
                <button type="button " 
                data-toggle="increase" 
                className="btn-cookie btn-sm"
                onClick={onToggleProp}>
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button " className="btn-trash btn-sm" onClick={onDelite}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
    

}
export default ClientListItem