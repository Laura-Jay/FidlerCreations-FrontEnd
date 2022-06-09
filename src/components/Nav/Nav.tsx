import "./nav.css"

export default function Nav(): JSX.Element {

    return (
        <nav>
            <button className="nav-btn">HOME</button>
            <button className="nav-btn">ABOUT</button>
            <button className="nav-btn">SERVICES</button>
            <button className="nav-btn">CONTACT</button>
        </nav>
    )
}