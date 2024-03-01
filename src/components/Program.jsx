
const Program = ({title, desc, icon}) => {
return (
    <div className="program-container">
        <div className="icon-container">{icon}</div>
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
)
}

export default Program