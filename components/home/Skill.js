import React from "react";

class Skill extends React.Component {
    render() {
        return (
            <section id="skill" className="w-screen mx-auto py-8 bg-white font-josefinSans">
                <div className="container mx-auto mt-50">
                    <div data-aos="zoom-in" data-aos-duration="2500" className="text-center mb-8">
                        <h1 className="w-full my-2 text-5xl font-bold text-gray-700">Skill</h1>
                        <div className="mb-4">
                            <div className="h-1 mx-auto bg-pink-500 w-1/4 opacity-75 my-0 py-0 rounded"></div>
                        </div>
                        <p className="text-lg mt-4 text-gray-600">Just beginners</p>
                        <p className="text-lg text-gray-600">See my project on <a target="_blank" className="text-gray-500 duration-150 hover:text-gray-900" href="https://github.com/justpiple">github.com/justpiple</a></p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        <div data-aos="fade-right" data-aos-duration="2500"
                            className="max-w-sm shadow-lg px-4 py-4 bg-white m-3 text-center">
                            <img src="/assets/img/html.svg" className="mx-auto max-w-full" alt="Logo" />
                            <div className="px-2 py-2 text-center">
                                <p className="font-bold text-xl mb-2 text-gray-700">HTML</p>
                                <p className="text-gray-700 text-base">The HyperText Markup Language, or HTML is the standard
                                    markup
                                    language for documents designed to be displayed in a web browser.</p>
                            </div>
                            <div className="px-2 py-4 text-center">
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/HTML"
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 shadow-md rounded-tr-lg rounded-bl-lg">Detail</a>
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="2500"
                            className="max-w-sm shadow-lg px-4 py-4 bg-white m-3 text-center">
                            <img src="/assets/img/js.svg" className="mx-auto max-w-full" alt="Logo" />
                            <div className="px-2 py-2 text-center">
                                <p className="font-bold text-xl mb-2 text-gray-700">JavaScript</p>
                                <p className="text-gray-700 text-base">JavaScript often abbreviated as JS, is a programming
                                    language
                                    that conforms to the ECMAScript specification.</p>
                            </div>
                            <div className="px-2 py-4 text-center">
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/JavaScript"
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 shadow-md rounded-tr-lg rounded-bl-lg">Detail</a>
                            </div>
                        </div>
                        <div data-aos="zoom-out-down" data-aos-duration="2500"
                            className="max-w-sm shadow-lg px-4 py-4 bg-white m-3 text-center">
                            <img src="/assets/img/nodejs.svg" className="mx-auto max-w-full" alt="Logo" />
                            <div className="px-2 py-2 text-center">
                                <p className="font-bold text-xl mb-2 text-gray-700">Node Js</p>
                                <p className="text-gray-700 text-base">Node.js is an open-source, cross-platform, back-end
                                    JavaScript runtime environment that runs on the V8 engine and executes JavaScript code
                                    outside a web browser.</p>
                            </div>
                            <div className="px-2 py-4 text-center">
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Node.js"
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 shadow-md rounded-tr-lg rounded-bl-lg">Detail</a>
                            </div>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="2500"
                            className="max-w-sm shadow-lg px-4 py-4 bg-white m-3 text-center">
                            <img src="/assets/img/mysql.svg" className="mx-auto max-w-full" alt="Logo" />
                            <div className="px-2 py-2 text-center">
                                <p className="font-bold text-xl mb-2 text-gray-700">MySQL</p>
                                <p className="text-gray-700 text-base">MySQL is an open-source relational database management
                                    system
                                    (RDBMS).</p>
                            </div>
                            <div className="px-2 py-4 text-center">
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/MySQL"
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 shadow-md rounded-tr-lg rounded-bl-lg">Detail</a>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2500"
                            className="max-w-sm shadow-lg px-4 py-4 bg-white m-3 text-center">
                            <img src="/assets/img/mongodb.svg" className="mx-auto max-w-full" alt="Logo" />
                            <div className="px-2 py-2 text-center">
                                <p className="font-bold text-xl mb-2 text-gray-700">MongoDB</p>
                                <p className="text-gray-700 text-base">MongoDB is a source-available cross-platform
                                    document-oriented database program.</p>
                            </div>
                            <div className="px-2 py-4 text-center">
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/MongoDB"
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 shadow-md rounded-tr-lg rounded-bl-lg">Detail</a>
                            </div>
                        </div>
                        <div data-aos="zoom-out-up" data-aos-duration="2500"
                            className="max-w-sm shadow-lg px-4 py-4 bg-white m-3 text-center">
                            <img src="/assets/img/Nextjs.svg" className="mx-auto max-w-full" alt="Logo" />
                            <div className="px-2 py-2 text-center">
                                <p className="font-bold text-xl mb-2 text-gray-700">Next.js</p>
                                <p className="text-gray-700 text-base">Next.js The React Framework for Production. The Open-source web development framework enabling React-based web applications functionalities such as server-side rendering and generating static websites.
                                </p>
                            </div>
                            <div className="px-2 py-4 text-center">
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Next.js"
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 shadow-md rounded-tr-lg rounded-bl-lg">Detail</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skill