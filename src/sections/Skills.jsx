import {SkillInfo} from "../constants/index.js";
import SkillCard from "../components/SkillCard.jsx";


const Skills = () => {
    return (
        <section className="c-space my-20" id="skills">
            <h3 className="head-text">Skills</h3>

            <div className="client-container">
                {
                    SkillInfo.map((skill , index) => <SkillCard key={index} title={skill.title} skills={skill.skills} />)
                }
            </div>

        </section>
    )
}
export default Skills
