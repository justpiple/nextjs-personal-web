import React from "react";
import Image from 'next/image';
// import footerSvg from "../public/assets/images/footerWave.svg";


class Footer extends React.Component {
    render() {
        return (
            <section className="w-screen mx-auto gradient-bottom">
                <img src="/assets/images/footerWave.svg" alt="svgFooter" />
                <div className="text-center mt-4">
                    Made with  <i className="bi bi-heart-fill"></i> by <a target="_blank" href="https://my.masben.studio" className="font-bold shadow-md rounded-tr-lg rounded-bl-lg">ben</a>.
                </div>
            </section>
        )
    }
}

export default Footer