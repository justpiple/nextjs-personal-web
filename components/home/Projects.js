import React from "react";

class Projects extends React.Component {
    render() {
        return (
            <section id="school" className="w-screen mx-auto py-8 bg-gray-50 font-josefinSans">
                <div className="container mx-auto pt-14">
                    <div data-aos="zoom-in" data-aos-duration="2500" className="text-center mb-8">
                        <h1 className="w-full my-2 text-5xl font-bold text-gray-700">Projects</h1>
                        <div className="mb-4">
                            <div className="h-1 mx-auto bg-pink-500 w-1/4 opacity-75 my-0 py-0 rounded"></div>
                        </div>
                        <p className="text-lg m-4 text-gray-600">Berikut adalah beberapa project saya : </p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="2500" className="grid grid-cols-1 lg:grid-cols-3 m-8">
                    <div className="bg-white px-4 py-4 m-2 shadow-lg rounded" >
                        <img src="https://cdn.discordapp.com/attachments/740823592647786597/1036958000943996958/unknown.png" className="zoom w-full rounded-lg object-center" alt="Preview" />
                        <div className="px-2 py-2 text-center">
                            <p className="font-bold text-xl mb-2 text-gray-700">Web Profile</p>
                            <p className="text-gray-700 text-base">Web yang dibuat untuk memperkenalkan diri saya. Web ini dibuat dengan framework Next.js</p>
                        </div>
                        <div className="px-2 py-4 text-center">

                            <a target="_blank" rel="noreferrer" href="https://github.com/justpiple/nextjs-personal-web"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 shadow-md rounded-tr-lg rounded-bl-lg">Info</a>
                        </div>
                    </div>
                    <div className="bg-white px-4 py-4 m-2 shadow-lg rounded" >
                        <img src="https://cdn.discordapp.com/attachments/740823592647786597/1036959156713824346/unknown.png" className="zoom w-full rounded-lg object-center" alt="Preview" />
                        <div className="px-2 py-2 text-center">
                            <p className="font-bold text-xl mb-2 text-gray-700">Whatsapp bot</p>
                            <p className="text-gray-700 text-base">Bot Whatsappp ini dibuat menggunakan Node.js</p>
                        </div>
                        <div className="px-2 py-4 text-center">

                            <a target="_blank" rel="noreferrer" href="https://github.com/justpiple/whatsapp-bot"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 shadow-md rounded-tr-lg rounded-bl-lg">Info</a>
                        </div>
                    </div>
                    <div className="bg-white px-4 py-4 m-2 shadow-lg rounded" >
                        <img src="https://cdn.discordapp.com/attachments/740823592647786597/1036962402694086676/Screenshot_2022-11-01_181054.png" className="zoom w-full rounded-lg object-center" alt="Preview" />
                        <div className="px-2 py-2 text-center">
                            <p className="font-bold text-xl mb-2 text-gray-700">Link shortener</p>
                            <p className="text-gray-700 text-base">Link shortener yang saya gunakan untuk pribadi. Dibuat menggunakan Python dan MongoDB.</p>
                        </div>
                        <div className="px-2 py-4 text-center">

                            <a target="_blank" rel="noreferrer" href="https://l.itsben.space"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 shadow-md rounded-tr-lg rounded-bl-lg">Info</a>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default Projects