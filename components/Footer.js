import React from "react";


class Footer extends React.Component {
    render() {
        return (
            <section className="w-screen mx-auto gradient-bottom">
                <img src="/assets/images/footerWave.svg" alt="svgFooter" />
                <div className="text-center mt-4">
                    Made with ❤️ by <a target="_blank" rel="noreferrer" href="https://my.masben.studio" className="font-bold shadow-md rounded-tr-lg rounded-bl-lg">ben</a>.
                </div>
            </section>
        )
    }
}

export default Footer