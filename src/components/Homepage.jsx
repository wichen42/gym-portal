import Landing from "./Landing"
import Navbar from "./Navbar"
import Programs from "./Programs"

const Homepage = () => {
    return (
        <div className="homepage-container">
            <Navbar />
            <Landing />
            <Programs />
        </div>
    )
}

export default Homepage