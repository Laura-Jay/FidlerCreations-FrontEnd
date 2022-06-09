import "./contact.css"
// import {AiFillInstagram} from "react-icons/ai"
// import {GrMail} from "react-icons/gr"
// import {AiFillHome} from "react-icons/ai"

export default function Contact(): JSX.Element {

    return (
          <div className="contact--container">
            <h2>Contact</h2>
            <div className="icon--container">
            <button className="icon">Instagram</button>
            <button className="icon">Email</button>
            </div>
        </div>
    )
}