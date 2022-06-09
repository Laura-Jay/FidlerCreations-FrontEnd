interface IServiceProps {
    header: string
    serviceArray: string[]
}

export default function ServiceCard(props: IServiceProps): JSX.Element {

    const bulletPoints = props.serviceArray.map((bulletPoint) => {
        <li>{bulletPoint}</li>
    })

    return (
        <div className="info-card">
            <h2 className="card-header">{props.header}</h2>
            <ul className="card-bullets">{bulletPoints}</ul>
        </div>
    )
}