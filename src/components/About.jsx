import user from "../../public/myimg.jfif"
const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">About Me</h2>
                        <p className="text-lg text-gray-600 mb-6 text-justify">
                            I am Mansi Joshi, a passionate and skilled graphics designer with over Two years of expertise in CorelDRAW and a year of specialized experience in UI/UX design using Figma. My creative journey is fueled by a deep understanding of visual storytelling and user-centered design principles, enabling me to craft stunning and intuitive designs that truly resonate. Proficient in industry-leading tools like Blender, Photoshop, and more, I bring versatility and innovation to every project.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 text-justify">
                            Whether you need captivating branding, seamless user interfaces, or striking digital artwork, I am dedicated to transforming your ideas into impactful visual experiences that elevate your brand and engage your audience. Let’s collaborate to make your vision come alive with creativity and precision!
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition duration-300"
                            >
                                Get in Touch
                            </a>
                            <a
                                href="#projects"
                                className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition duration-300"
                            >
                                View My Work
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                            <img
                                src={user}
                                alt="Designer at work"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-4 rounded-lg shadow-lg">
                            <p className="text-2xl font-bold">2+</p>
                            <p className="text-sm">Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About 