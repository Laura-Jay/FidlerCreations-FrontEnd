import InstaFeed from "./InstaFeed";
import { routesettingInfo } from "../../assets/data";


export default function RouteSetting(): JSX.Element {

    const content = routesettingInfo.map((paragraph) => {
        <p>{paragraph}</p>
    })

    return (
        <>
        <div className="info-container">
          <div className="info-content">
              {content}
          </div>
        </div>
        <InstaFeed />
        </>
    )
}