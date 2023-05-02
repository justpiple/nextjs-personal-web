import React from "react";


class Footer extends React.Component {
    render() {
        return (
            <footer className="bottom-0 px-10 pt-24 pb-12">
                <div className="container text-center">
                    <div className="w-full pt-10">
                        <p className="font-medium text-sm text-center text-gray-700">
                        </p>
                        Made with <span role="img">❤️</span> by <a target="_blank" rel="noreferrer" href="https://my.benspace.xyz" className="font-bold shadow-md rounded-tr-lg rounded-bl-lg">ben</a>.
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer