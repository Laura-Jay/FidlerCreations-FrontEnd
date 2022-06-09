import "./home.css"
import Nav from "../Nav/Nav"
import HERO from "../../../src/assets/hero.png"
import Contact from "../Contact/Contact"

export default function Home(): JSX.Element {
    
    return (
        <>
        <Nav />
        <div className="hero">
            <img src={HERO} alt="logo" />
        </div>
        <Contact />
        </>
    )
}