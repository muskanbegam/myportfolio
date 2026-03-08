import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2024",
            title: "Junior UX Designer",
            company: "InfoTech Pvt.Ltd",
            type: "Fulltime",
            description: "I’m a UX/UI designer who turns “why is this confusing?” into “wow, that’s smooth.” Clean visuals, thoughtful flows, and a tiny obsession with perfect spacing. Professional, creative, and slightly allergic to bad design."
        },
        {
            year: "2025",
            title: "Web Developer",
            company: "Disha Medias",
            type: "Remote",
            description: "I was a web developer who turned ideas into clean, fast, and functional websites. I cared about smooth user experiences, tidy code, and making things work exactly as they should — with a slight obsession for fixing the tiniest bugs."
        },
        {
            year: "2025-2026",
            title: "Coding and Robotics Instructor",
            company: "WizKlub Pvt.Ltd",
            type: "Fulltime",
            description: "was a Coding & Robotics Instructor, teaching students how to turn curiosity into code and ideas into working robots. I focused on making tech simple, hands-on, and actually fun — because learning should feel exciting, not intimidating."
        },
        {
            year: "2026+",
            title: "Python Backend and Automation",
            company: "2Oceans",
            type: "Fulltime",
            description: "I specialize in Python Automation, building smart scripts and workflows that handle repetitive tasks so people don’t have to. I focus on clean, efficient solutions that save time, reduce errors, and make systems run smoother behind the scenes."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;