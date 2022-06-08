import React, { useEffect, useState } from "react";
import Headers from "../../components/Header";
import Footer from "../../components/blog/Footer";
import Navbar from "../../components/navAdmin";
import { useRouter } from 'next/router';
import { withSessionSsr } from "../../lib/getSession";
import AcLink from "../../components/ActiveLink";
import clientPromise from "../../lib/mongodb";
function copyLink(e) {
    return navigator.clipboard.writeText(e.target.innerText).then(() => alert("Link copied!"))
}
function closeModal() {
    return document.getElementById('modal').classList.add("hidden")
}
function showModal(data) {
    document.getElementById("oldId").value = data.id || ""
    document.getElementsByName("url")[0].value = data.url || ""
    document.getElementsByName("newId")[0].value = data.id || ""
    document.getElementById('modal').classList.remove("hidden")
}
function BlogAdmin({ links }) {
    const router = useRouter()
    return (
        <React.Fragment>
            <Headers title="Link shortner - itsben.space" />
            <div className="mx-auto max-w-3xl px-2 xl:max-w-5xl">
                <div className="flex h-screen flex-col justify-between">
                    <Navbar />
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <button onClick={(e) => showModal({})} className="duration-300 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded mb-2" type="button">
                                        Create new link +
                                    </button>&nbsp;
                                    <AcLink href={router.query.isBot ? "/admin/short-link" : "?isBot=1"} className="duration-300 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                        {router.query.isBot ? "All Link" : "Bot Link"}
                                    </AcLink>
                                    <table className="min-w-full">
                                        <thead className="shadow-xl border-2 border-gray-300">
                                            <tr>
                                                <th scope="col" className="text-sm font-medium text-gray-900 p-2 text-left">
                                                    #
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-4 text-left max-w-[200px]">
                                                    Link
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-4 text-left max-w-[200px]">
                                                    Short link
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-4 text-left">
                                                    Click
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-4 text-left">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(router.query.isBot ? links.filter(x => x.isBot) : links.filter(x => !x.isBot))
                                                .map((link, i) => {
                                                    return <tr key={i} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                        <td className="p-2 whitespace-nowrap text-sm font-medium text-gray-900">{i + 1}</td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-[210px] overflow-clip">
                                                            <a className="mb-2 block duration-300 hover:text-teal-400 cursor-pointer" onClick={copyLink}>{link.url}</a>
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-[240px] overflow-clip">
                                                            <a className="mb-2 block duration-300 hover:text-teal-400 cursor-pointer" onClick={copyLink}>https://l.itsben.space/{link.id}</a>
                                                            <a className="mb-2 block duration-300 hover:text-teal-400 cursor-pointer" onClick={copyLink}>https://itsben.space/link/{link.id}</a>
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {link.clickCount}
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            <button onClick={(e) => showModal(link)} className="mr-2 duration-300 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                                                Edit
                                                            </button>
                                                            <button onClick={(e) => deleteLink(link.id)} className="duration-300 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                                                Remove
                                                            </button>
                                                        </td>
                                                    </tr>
                                                })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
            <div id="modal" tabIndex="-1" className="hidden duration-300 transition-all overflow-y-auto overflow-x-hidden m-auto fixed top-0 right-0 left-0 z-50 w-full md:inset-0 md:h-full">
                <div className="relative p-4 w-full max-w-2xl h-full md:h-auto m-auto">
                    <div className="relative rounded-lg shadow bg-gray-700">
                        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Edit Link
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={closeModal}>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <form onSubmit={submitEdit}>
                            <div className="px-4 py-2 space-y-2">
                                <label className="block text-white text-left" htmlFor="url">
                                    Link
                                </label>
                                <input id="url" autoComplete="off" name="url" className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400" type="text" required />
                                <input type="hidden" id="oldId" name="id" />
                            </div>
                            <div className="px-4 py-2 space-y-2">
                                <label className="block text-white text-left" htmlFor="id">
                                    Short id
                                </label>
                                <input id="id" autoComplete="off" name="newId" className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400" type="text" />
                            </div>
                            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
    async function submitEdit(e) {
        e.preventDefault()
        var dataForm = {
            url: e.target.url.value,
            id: document.getElementById("oldId").value,
            newId: e.target.newId.value
        }
        console.log(dataForm)
        await fetch('/api/short-url', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataForm),
        }).then(x => x.json());
        router.push(window.location.href)
        document.getElementById('modal').classList.add("hidden")
    }
    async function deleteLink(id) {
        const isYes = confirm("Are you sure delete this link?")
        if (!isYes) return
        await fetch('/api/short-url', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        }).then(x => x.json());
        router.push(window.location.href)
        document.getElementById('modal').classList.add("hidden")
    }
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
        const db = await clientPromise
        var getDB = await db.db('personal-blog').collection('link').find({}).toArray()
        return {
            props: {
                links: JSON.parse(JSON.stringify(getDB.reverse())).filter(x => !x.isBlog)
            },
        };

    }
);

export default BlogAdmin