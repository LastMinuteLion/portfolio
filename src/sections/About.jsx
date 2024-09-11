import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { useState } from "react";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('harsh20033@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.3)] hover:bg-opacity-90">
                        <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext transition-all duration-300 group-hover:text-white group-hover:scale-105">Hi, I’m Harsh</p>
                            <p className="grid-subtext transition-all duration-300 group-hover:text-gray-300">I’m a CSE grad, an engineer by heart, and a caffeine-dependent human form. My hunger for tech is insatiable, chasing the next innovation like it's my morning coffee!</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.3)] hover:bg-opacity-90">
                        <img src="assets/grid22.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext transition-all duration-300 group-hover:text-white group-hover:scale-105">Tech Stack</p>
                            <p className="grid-subtext transition-all duration-300 group-hover:text-gray-300">"Behold, the Full-Stack Ninja! My NextJS jutsu crafts sleek UIs faster than Naruto's shadow clones. Backend? My Node.js chakra flows through databases like the Force. With the sacred scrolls of Docker and Git, I summon scalable applications that even the Coding Gods envy!"</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.3)] hover:bg-opacity-90">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 30.7,
                                    lng: 76.7,
                                    text: 'Chandigarh, India',
                                    color: 'white',
                                    size: 75
                                }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext transition-all duration-300 group-hover:text-white group-hover:scale-105">I’m very flexible with time zone communications & locations</p>
                            <p className="grid-subtext transition-all duration-300 group-hover:text-gray-300">I&apos;m based in Chandigarh, India and ready to tackle challenges worldwide. I plan to take worldly challenges with my trustful summons. Behold, Docker the mystical container, Git the time-bending familiar, Redis to keep hold of everyone's memory and C++ commanding everyone.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.3)] hover:bg-opacity-90">
                        <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext transition-all duration-300 group-hover:text-white group-hover:scale-105">My Passion for Coding</p>
                            <p className="grid-subtext transition-all duration-300 group-hover:text-gray-300">My journey as a programmer isn't just a career path—it's my very own isekai adventure! I've been transported into a world where I'm the overpowered protagonist, and my trusty keyboard is my legendary weapon. By day, I'm just your average developer, but by night (and, let's be honest, most weekends), I transform into 'The Coding Titan', a being of pure logic and syntax!</p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.3)] hover:bg-opacity-90">
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl italic md:text-1xl font-weight-200 text-gray_gradient text-white">harsh20033@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
