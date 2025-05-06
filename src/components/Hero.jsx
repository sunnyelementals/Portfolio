const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                    Creative Graphic Designer
                </h1>
                <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto">
                    Transforming ideas into stunning visual experiences through innovative design solutions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition duration-300"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero 