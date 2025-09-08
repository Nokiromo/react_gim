import './app-filter.css'

const AppFilter = () =>{
    return(
        <div className="btn-group">
            <button className="btn btn-light"
                type="button">
                All clients

            </button>
            <button className="btn btn-outline-light"
                type="button">
                Vip clients

            </button>
            <button className="btn btn-outline-light"
                type="button">
                Take towel

            </button>
        </div>
    )
}

export default AppFilter