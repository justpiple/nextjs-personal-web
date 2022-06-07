import React, { useEffect } from "react";
import Headers from "../../components/Header";
import Footer from "../../components/blog/Footer";
import Navbar from "../../components/NavAdmin";
import { useRouter } from 'next/router';
import { withSessionSsr } from "../../lib/getSession";
import AcLink from "../../components/ActiveLink";

function BlogAdmin({ user }) {
    return (
        <React.Fragment>
            <Headers title="Admin panel" />
            <div className="mx-auto max-w-3xl px-2 xl:max-w-5xl">
                <div className="flex h-screen flex-col justify-between">
                    <Navbar />
                    <div className="font-inter text-base mx-auto max-w-3xl pt-5 px-6 sm:px-6 xl:max-w-5xl xl:px-0">
                        <span className="text-2xl">Hello welcome {user.name}</span>
                        <div className="p-2">
                            <span className="font-semibold text-xl">Menu</span>
                            <ul className="list-disc">
                                <li className="p-1">
                                    <a href="/admin/blog-list"
                                        className="duration-300 text-blue-500 hover:text-cyan-400">
                                        List post
                                    </a>
                                </li>
                                <li className="p-1">
                                    <a href="/admin/deleted-post"
                                        className="duration-300 text-blue-500 hover:text-cyan-400">
                                        Deleted Post
                                    </a>
                                </li>
                                <li className="p-1">
                                    <a href="/admin/short-link"
                                        className="duration-300 text-blue-500 hover:text-cyan-400">
                                        Short Link
                                    </a>
                                </li>
                                {user.isSuperAdmin ? <li className="p-1">
                                    <a href="/admin/user"
                                        className="duration-300 text-blue-500 hover:text-cyan-400">
                                        User Manage
                                    </a>
                                </li> : null}
                                <li className="p-1">
                                    <a href="/api/logout"
                                        className="duration-300 text-blue-500 hover:text-cyan-400">
                                        Logout
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment >
    )
}
export const getServerSideProps = withSessionSsr(
    async function getServerSideProps({ req, res }) {
        if (!req.session?.state?.isLoggedIn) {
            return {
                redirect: {
                    destination: '/admin/login',
                    permanent: false,
                }
            }
        }
        return {
            props: {
                user: req.session?.state || {}
            },
        };

    }
);

export default BlogAdmin