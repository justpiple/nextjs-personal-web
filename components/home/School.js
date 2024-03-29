import React from "react";

class School extends React.Component {
    render() {
        return (
            <section id="school" className="w-screen mx-auto py-8 bg-gray-200 font-josefinSans">
                <div className="container mx-auto mt-14">
                    <div data-aos="zoom-in" data-aos-duration="2500" className="text-center mb-8">
                        <h1 className="w-full my-2 text-5xl font-bold text-gray-700">School</h1>
                        <div className="mb-4">
                            <div className="h-1 mx-auto bg-pink-500 w-1/4 opacity-75 my-0 py-0 rounded"></div>
                        </div>
                        <p className="text-lg m-4 text-gray-600">Berikut adalah tempat saya sekolah : </p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="2500" className="grid grid-cols-1 lg:grid-cols-3 m-8">
                    <div className="bg-white px-4 py-4 m-2 shadow-lg rounded grid grid-rows-none">
                        <img src="/assets/img/sdbss.PNG" className="zoom w-full rounded-lg object-center" alt="School" />
                        <div className="px-2 py-2 text-center">
                            <p className="font-bold text-xl mb-2 text-gray-700">SD Brawijaya Smart School</p>
                            <p className="text-gray-700 text-base">Saya telah menyelesaikan pendidikan Sekolah Dasar pada tahun 2019.
                            </p>
                        </div>
                        <div className="px-2 py-4 text-center mt-auto">
                            <a target="_blank" rel="noreferrer" href="https://sdbss.sch.id"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 shadow-md rounded-tr-lg rounded-bl-lg">Info</a>
                        </div>
                    </div>
                    <div className="bg-white px-4 py-4 m-2 shadow-lg rounded grid grid-rows-none">
                        <img src="/assets/img/smp-bss.jpg" className="zoom w-full rounded-lg" alt="School" />
                        <div className="px-2 py-2 text-center">
                            <p className="font-bold text-xl mb-2 text-gray-700">SMP Brawijaya Smart School</p>
                            <p className="text-gray-700 text-base">Saya telah menyelesaikan pendidikan Sekolah Menengah
                                Pertama di SMP Brawijaya Smart School pada tahun 2022.</p>
                        </div>
                        <div className="px-2 py-4 text-center mt-auto">
                            <a target="_blank" rel="noreferrer" href="https://smpbss.sch.id"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 shadow-md rounded-tr-lg rounded-bl-lg">Info</a>
                        </div>
                    </div>
                    <div className="bg-white px-4 py-4 m-2 shadow-lg rounded grid grid-rows-none">
                        <img src="/assets/img/smk-telkom.png" className="zoom w-full rounded-lg" alt="School" />
                        <div className="px-2 py-2 text-center">
                            <p className="font-bold text-xl mb-2 text-gray-700">SMK Telkom Malang</p>
                            <p className="text-gray-700 text-base">Saya adalah Mokleters angkatan 31 yang sekarang duduk di kelas X jurusan Rekayasa Perangkat Lunak.</p>
                        </div>
                        <div className="px-2 py-4 text-center mt-auto">
                            <a target="_blank" rel="noreferrer" href="https://www.smktelkom-mlg.sch.id"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 shadow-md rounded-tr-lg rounded-bl-lg">Info</a>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default School