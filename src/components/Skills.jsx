const Skills = () => {
    const skills = [
        {
            category: "Design Software",
            items: [
                { name: "Adobe Photoshop", level: 95 },
                { name: "Adobe Illustrator", level: 90 },
                { name: "corelDRAW", level: 85 },
                { name: "Figma", level: 90 }
            ]
        },
        {
            category: "Design Skills",
            items: [
                { name: "Brand Identity", level: 95 },
                { name: "UI/UX Design", level: 85 },
                { name: "Print Design", level: 90 },
                { name: "Social Media Design", level: 95 }
            ]
        }
    ]

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Skills & Expertise</h2>
                    <p className="mt-4 text-lg text-gray-600">Professional capabilities and design tools</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {skills.map((skillGroup) => (
                        <div key={skillGroup.category} className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">{skillGroup.category}</h3>
                            <div className="space-y-6">
                                {skillGroup.items.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-700">{skill.name}</span>
                                            <span className="text-gray-500">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}

export default Skills 