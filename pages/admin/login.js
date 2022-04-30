import React, { useEffect } from "react";
import Headers from "../../components/Header";
import Footer from "../../components/blog/Footer";
import Navbar from "../../components/blog/NavBar";
import { withSessionSsr } from "../../lib/getSession"
import { useRouter } from "next/router";



function BlogAdmin({ data, req }) {
    const router = useRouter()
    async function handlerForm(e) {
        try {
            e.preventDefault();
            const submitButton = document.getElementById("submit")
            document.getElementById("warn").style.display = "none"
            submitButton.setAttribute("disabled", "disabled")
            submitButton.classList.add("cursor-progress")
            const fetchData = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: e.target.username.value, password: e.target.password.value }),
            }).then(x => x.json());
            if (fetchData.status == 200) return router.push('/admin')
            else {
                submitButton.disabled = false
                submitButton.classList.remove("cursor-progress")
                document.getElementById("warn").style.display = "block"
                document.getElementById("warn").innerHTML = fetchData.message
            }
        } catch {
            submitButton.disabled = false
            submitButton.classList.remove("cursor-progress")
            document.getElementById("warn").style.display = "block"
            document.getElementById("warn").innerHTML = "Client error"
        }
    }
    return (
        <React.Fragment>
            <Headers title="Example post - Blog" />
            <div className="mx-auto max-w-3xl px-2 xl:max-w-5xl">
                <div className="flex h-screen flex-col justify-between">
                    <Navbar />
                    <div className="m-auto">
                        <form className="group w-[100%] sm:w-[460px] bg-white drop-shadow-lg rounded px-8 pt-6 pb-8 mb-4 duration-100 border-1 border-slate-400   hover:shadow-xl" onSubmit={handlerForm}>
                            <h1 className="font-bold text-xl text-center p-2">ADMIN PAGE</h1>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" id="username" type="text" placeholder="Username" required autoComplete="off" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" type="password" placeholder="******************" required />
                            </div>
                            <span id="warn" style={{ display: "none" }} className="mb-4 inline-block align-baseline font-bold text-sm text-red-500"></span>
                            <div className="flex items-center justify-between">
                                <button id="submit" className="duration-300 animate-bounce transition hover:-translate-y-1 hover:scale-110 group-hover:animate-none bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Login
                                </button>
                            </div>
                        </form>
                        <p className="text-center text-gray-500 text-sm">
                            masben.studio
                        </p>
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment >
    )
}



export const getServerSideProps = withSessionSsr(
    async function getServerSideProps({ req, res }) {
        if (req.session?.state?.isLoggedIn) {
            return {
                redirect: {
                    destination: '/admin',
                    permanent: false,
                }
            }
        }
        return {
            props: {},
        };
    }
);


export default BlogAdmin