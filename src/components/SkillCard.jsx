const SkillBadge = ({ skills }) => {
    return skills.map((skill, index) => (
        <div key={index} >
            <img
                src={`/Icons/${skill}.png`}
                alt={skill}
                className="w-10 h-10 mr-3" // Adjust size as needed
            />
            <p className="text-white">{skill}</p>
        </div>
    ));
}

const SkillCard = (props) => {
    return (
        <div className="client-review p-4 bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-white hover:shadow-md">
            <div className="grid-headtext text-center text-xl font-bold mb-4">
                {props.title}
            </div>
            <div className="grid grid-cols-4 gap-4 mt-5">
                <SkillBadge skills={props.skills} />
            </div>
        </div>
    );
}

export default SkillCard;
