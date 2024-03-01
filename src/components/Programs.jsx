import Program from "./Program"
import { FaUserAlt, FaUsers} from "react-icons/fa";
import { AiOutlineLaptop } from "react-icons/ai";
import { IconContext } from 'react-icons';

const Programs = () => {
    let online = {
        title: "Online Training",
        desc: "Customized programming and nutritional guidance for motivated individuals. With 24/7 access to our coaches and weekly check-ins all done on an app; we offer a premium coaching experience.",
    }
    let personal = {
        title: "Personal Training",
        desc: "One on one individualized training focused on helping our clients achieve their fitness goals. With undivided attention to our clients we help program, teach, and coach our clients so they leave with more than just a workout.",
    }
    let group = {
        title: "Group Training",
        desc: "Our small group classes are focused on delivering heart pumping and fat shedding results. In our Strength & Conditioning based HIIT classes we will generate POWERFUL movements to get you moving.",
    }
    return (
        <div className="programs-container">
            <h1>MORE THAN JUST A GYM</h1>
            <div className="programs">
                <Program 
                    title={online.title} 
                    desc={online.desc}
                    icon={
                        <IconContext.Provider value={{size: "30px"}}>
                            <AiOutlineLaptop />
                        </IconContext.Provider>
                }/>
                <Program 
                    title={personal.title} 
                    desc={personal.desc}
                    icon={
                        <IconContext.Provider value={{size: "30px"}}>
                            <FaUserAlt />
                        </IconContext.Provider>
                }/>
                <Program 
                    title={group.title} 
                    desc={group.desc}
                    icon={
                        <IconContext.Provider value={{size: "30px"}}>
                            <FaUsers />
                        </IconContext.Provider>
                }/>
            </div>
        </div>
    )
}

export default Programs