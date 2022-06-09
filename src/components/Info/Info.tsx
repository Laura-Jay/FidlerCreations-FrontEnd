import "./info.css"
import Contact from "../Contact/Contact"
import AboutCard from "./AboutCard"
import Qualifications from "./Qualifications"
import ServiceCard from "./ServiceCard"
import { aboutInfo, serviceBulletPointsDesign, serviceBulletPointsRoutes} from "../../assets/data"

export default function Info(): JSX.Element {

    return (
        <>
        <div className="cards--container">
        <AboutCard content={aboutInfo}/>
        <Qualifications />
        <div className="services--container">
        <ServiceCard header="Climbing Wall Design" serviceArray={serviceBulletPointsDesign}/>
        <ServiceCard header="Route Setting" serviceArray={serviceBulletPointsRoutes}/>
        </div>
        </div>
        <Contact />
        </>
    )
}