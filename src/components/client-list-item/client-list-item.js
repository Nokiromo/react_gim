import './client-list-item.css'
const ClientListItem = () => {
    return (
        <li className="list-group-item d-flex jastify-content-between">
            <span className="list-group-item-label">Oleksandr Morykon</span>
            <input type="text" className="list-group-item-input" defaultValue='100' />
            <div className="d-flex jastify-content-center align-items-center">
                <button type="button " className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button " className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}
export default ClientListItem