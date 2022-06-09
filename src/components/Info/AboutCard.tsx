interface IAboutProps {
    content: string[]
}

export default function AboutCard(props: IAboutProps): JSX.Element {

    return (
        <div className="info-card">
            <h2 className="card-header">About</h2>
            <p className="card-content">{props.content}</p>
        </div>
    )
}