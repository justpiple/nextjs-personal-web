import React from "react";
import { Swiper } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

class Certificate extends React.Component {
    componentDidMount() {
        new Swiper('#certificate', {
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 5000,
            },
            grabCursor: true,
        });
    }
    render() {
        return (
            <section id="cr" className="w-screen mt-5 mb-5 mx-auto py-8 bg-gray-200 font-josefinSans">
                <div className="container mx-auto mt-20 mb-20 my-10">
                    <div data-aos="zoom-in" data-aos-duration="2500" className="text-center mb-8">
                        <h1 className="w-full my-2 text-5xl font-bold text-gray-700">Certificate</h1>
                        <div className="mb-4">
                            <div className="h-1 mx-auto bg-pink-500 w-1/4 opacity-75 my-0 py-0 rounded"></div>
                        </div>
                    </div>
                    <div className="swiper" data-aos="zoom-out-down" data-aos-duration="2500" id="certificate">
                        <div className="swiper-wrapper">
                            <a className="swiper-slide"><img className="lg:max-w-screen-md mx-auto" src="/assets/img/c-1.png"
                                alt="Certificate commandline" />
                            </a>
                            <a className="swiper-slide"><img className="lg:max-w-screen-md mx-auto" src="/assets/img/c-2.png"
                                alt="Certificate git" />
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default Certificate
