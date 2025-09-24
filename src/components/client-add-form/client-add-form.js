import './client-add-form.css'
import { Component } from 'react'

class ClientAddForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            currentMembership: ''
        }
    }
    onValueChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    } 
    render(){
        const {addClient} = this.props
        const {name, currentMembership} = this.state
        return(
        <div className="app-add-form">
            <h3>Add new Client</h3>
            <form onSubmit={e =>{
                e.preventDefault()
                addClient(name, currentMembership)
                this.setState({name: '', currentMembership: ''})
            }} className="add-form d-flex">
                <input type="text" className="form-control new-post-label" 
                placeholder="Name" name='name' value={name} onChange={this.onValueChange}
                />
                <input type="number" className="form-control new-post-label" 
                placeholder="$$$$" name= 'currentMembership' value={currentMembership} onChange={this.onValueChange}
                />
                <button className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
    }

}
export default ClientAddForm