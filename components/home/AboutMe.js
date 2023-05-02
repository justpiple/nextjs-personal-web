import React, { useEffect } from "react";
import Typewriter from '../../lib/typewriter';


class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     spotifyStatus: false
        // }
        // this.updateSpotify = this.updateSpotify.bind(this)
    }
    // updateSpotify() {
    //     fetch(`/api/spotify-status?t=${Date.now()}`).then(x => x.arrayBuffer()).then(x => {
    //         this.setState({ spotifyStatus: `data:image/svg+xml;base64,${btoa(String.fromCharCode(...new Uint8Array(x)))}` })
    //     }).catch(() => {
    //         this.setState({ spotifyStatus: false })
    //     })
    // }
    componentDidMount() {
        // this.updateSpotify()
        new Typewriter(document.getElementById("nama"), {
            strings: ['Ben', 'Beni'],
            autoStart: true,
            loop: true,
            delay: 300
        });
        // this.spotifyInt = setInterval(this.updateSpotify, 30000)
    }
    // componentWillUnmount() {
    //     clearInterval(this.spotifyInt)
    // }
    render() {
        return (
            <section id="about" className="w-screen mx-auto gradient font-josefinSans">
                <div className="px-16 py-8 text-center text-white">
                    <div className="w-full">
                        <div data-aos="flip-up" className="px-4 py-4">
                            <img src="https://avatars.githubusercontent.com/u/83589651" alt="Hero picture"
                                className="hero shadow-lg rounded-full max-w-full mx-auto text-center w-48" />
                        </div>
                    </div>
                    <span data-aos="zoom-in-down" className="text-3xl font-bold mb-2">
                        Halo, saya <a id="nama"></a>.
                    </span>
                    <h3 data-aos="zoom-out-up" className="text-lg mb-2 font-josefinSans">
                        Saya adalah seorang pelajar kelas X di SMK Telkom Malang,
                        saya belajar tentang pemrograman untuk mengisi waktu luang.
                    </h3>
                    {/* <br /> */}
                    {/* <h2 data-aos="zoom-out-down" className="font-bold">Spotify Status</h2>
                    <div data-aos="zoom-out-down">
                        <img id="spotifyStatus" src={this.state.spotifyStatus || "/assets/img/spotify-default.svg"} alt="Spotify Status"
                            onClick={() => window.open("https://volt.fm/benn")}
                            style={{ cursor: "pointer", backgroundImage: "linear-gradient( #7fbdb1, #40af93)" }}
                            className="shadow-lg hero mx-auto max-w-full" />
                    </div> */}
                </div>
                <img src="/assets/images/wave1.svg" alt="footerSvg" />
            </section>
        )
    }
}

export default AboutMe