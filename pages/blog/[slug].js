import React, { useEffect } from "react";
import Headers from "../../components/Header";
import Footer from "../../components/blog/Footer";
import Navbar from "../../components/blog/NavBar";
import { useRouter } from 'next/router';

function Home() {
    const router = useRouter()
    const { slug } = router.query

    return (
        <React.Fragment>
            <Headers title="Example post - Blog" />
            <div className="mx-auto max-w-3xl px-2 xl:max-w-5xl">
                <div className="flex h-screen flex-col justify-between">
                    <Navbar />
                    <div className="font-inter text-base mx-auto max-w-3xl pt-5 px-6 sm:px-6 xl:max-w-5xl xl:px-0">
                        <article>
                            <header className="xl:pb-4">
                                <div className="border-b border-gray-400">
                                    <h1 className="pb-6 text-center text-4xl font-extrabold leading-9 tracking-tight sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">Example post blog</h1>
                                </div>
                                <dl className="pb-4 pt-4">
                                    <span className="text-gray-500">Posted by Ben</span>
                                    <dt className="sr-only">Published on</dt>
                                    <dd className="leading-6 text-gray-500">
                                        <time>Sunday, April 3, 2022</time>
                                    </dd>
                                </dl>
                            </header>
                            <div className="pb-10 pt-10">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et urna sed leo maximus varius in eget mauris. Quisque et rhoncus magna. Curabitur cursus blandit eleifend. Nunc molestie, ante ut facilisis commodo, arcu tellus interdum metus, vitae feugiat neque orci a urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eget est metus. Vestibulum finibus nibh vel laoreet commodo. Duis ut maximus sem.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et urna sed leo maximus varius in eget mauris. Quisque et rhoncus magna. Curabitur cursus blandit eleifend. Nunc molestie, ante ut facilisis commodo, arcu tellus interdum metus, vitae feugiat neque orci a urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eget est metus. Vestibulum finibus nibh vel laoreet commodo. Duis ut maximus sem.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et urna sed leo maximus varius in eget mauris. Quisque et rhoncus magna. Curabitur cursus blandit eleifend. Nunc molestie, ante ut facilisis commodo, arcu tellus interdum metus, vitae feugiat neque orci a urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eget est metus. Vestibulum finibus nibh vel laoreet commodo. Duis ut maximus sem.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et urna sed leo maximus varius in eget mauris. Quisque et rhoncus magna. Curabitur cursus blandit eleifend. Nunc molestie, ante ut facilisis commodo, arcu tellus interdum metus, vitae feugiat neque orci a urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eget est metus. Vestibulum finibus nibh vel laoreet commodo. Duis ut maximus sem.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et urna sed leo maximus varius in eget mauris. Quisque et rhoncus magna. Curabitur cursus blandit eleifend. Nunc molestie, ante ut facilisis commodo, arcu tellus interdum metus, vitae feugiat neque orci a urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eget est metus. Vestibulum finibus nibh vel laoreet commodo. Duis ut maximus sem.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et urna sed leo maximus varius in eget mauris. Quisque et rhoncus magna. Curabitur cursus blandit eleifend. Nunc molestie, ante ut facilisis commodo, arcu tellus interdum metus, vitae feugiat neque orci a urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eget est metus. Vestibulum finibus nibh vel laoreet commodo. Duis ut maximus sem.</p>
                            </div>
                        </article>
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment >
    )
}

export default Home