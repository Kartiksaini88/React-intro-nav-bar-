import "./components.css"

function Name({ name }) {
    return (
        <div>
            <li className='system'>{name}</li>
        </div>

    )

}

function Nav(){
    return(
        <div id="nav">
            <div className="right">Logobakery</div>
            <div className="small">service</div>
            <div className="small">Projects</div>
            <div className="small">About</div>
            <button id="btn">Contact</button>
        </div>
    )
}

export {Name , Nav}   