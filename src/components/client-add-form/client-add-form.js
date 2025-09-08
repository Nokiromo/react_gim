import './client-add-form.css'
const ClientAddForm = () =>{
    return(
        <div className="app-add-form">
            <h3>Add new Client</h3>
            <form  className="add-form d-flex">
                <input type="text" className="form-control new-post-label" 
                placeholder="Name"
                />
                <input type="number" className="form-control new-post-label" 
                placeholder="$$$$"
                />
                <button className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
}
export default ClientAddForm