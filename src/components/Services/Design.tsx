import PhotoBanner from "./PhotoBanner"
import { climbingDesignInfo } from "../../assets/data"

export default function Design(): JSX.Element {

    const content = climbingDesignInfo.map((paragraph) => {
        <p>{paragraph}</p>
    })
    return (
        <>
        <PhotoBanner />
        <div className="info-container">
          <div className="info-content">
              {content}
          </div>
        </div>
        </>
    )
}