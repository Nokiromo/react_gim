
import './app-filter.css'


const AppFilter = (props) =>{
    const buttonsData =[
        {name: 'all', label: 'All clients'},
        {name: 'increace', label: 'Vip clients'},
        {name: 'like', label: 'Take towel'}
    ]
    const buttons = buttonsData.map(({name, label}) =>{
        const active = props.stan === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return(
            <button 
                className={`btn ${clazz}`}
                key={name}
                type="button"
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
            )
    })

    return(
        <div className="btn-group">
            {buttons}
        </div>
    )
}



export default AppFilter