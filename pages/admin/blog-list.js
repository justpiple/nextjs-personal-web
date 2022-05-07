import React, { useEffect } from "react";
import Headers from "../../components/Header";
import Router from 'next/router';
import Footer from "../../components/blog/Footer";
import Navbar from "../../components/blog/NavBar";
import { useRouter } from 'next/router';
import ActiveLink from "../../components/ActiveLink";
import clientPromise from "../../lib/mongodb";
import { withSessionSsr } from "../../lib/getSession";
import { timeConverter } from "../../lib/function";


function PreviewBlog({ pubDate, labels, title, link, textPreview, id }) {
    async function deletePost() {
        const isYes = confirm("Are you sure to delete this post?")
        if (!isYes) return
        const delPost = await fetch('/api/deletePost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        }).then(x => x.json());
        if (delPost.status == 200) {
            alert(delPost.message)
            Router.reload(window.location.pathname)
        } else alert(`Failed to delete post\n\nerror: ${delPost.error}`)
    }
    return (
        <li className="py-12">
            <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500">
                            <time>{timeConverter(pubDate)}</time>
                        </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                    <ActiveLink className="text-gray-900 duration-300 hover:text-cyan-500" href={"/admin/editor/" + link}>
                                        {title}
                                    </ActiveLink>
                                </h2>
                                <div className="flex flex-wrap">
                                    {labels ? labels.map(label => {
                                        return <ActiveLink className="text-teal-500 mr-3 text-sm font-medium uppercase duration-300 hover:text-cyan-600" key={label} href={"/blog/tags/" + label}>{label}</ActiveLink>
                                    }) : null}
                                </div>
                            </div>
                            <div className="text-ellipsis max-w-none text-gray-500" dangerouslySetInnerHTML={{ __html: textPreview }}>
                            </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                            <span className="duration-300 hover:text-red-600 cursor-pointer" onClick={deletePost}>
                                Delete post →
                            </span>
                        </div>
                    </div>
                </div>
            </article>
        </li>
    )
}

function BlogAdmin({ data }) {
    async function deletePost() {
        const isYes = confirm("Are you sure to delete this post?")
        if (!isYes) return
        const delPost = await fetch('/api/deletePost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        }).then(x => x.json());
        if (delPost.status == 200) {
            alert(delPost.message)
            Router.reload(window.location.pathname)
        } else alert(`Failed to delete post\n\nerror: ${delPost.error}`)
    }
    return (
        <React.Fragment>
            <Headers title="Blog list - masben.studio" />
            <div className="mx-auto max-w-3xl px-2 xl:max-w-5xl">
                <div className="flex h-screen flex-col justify-between">
                    <Navbar />
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <button onClick={(e) => showModal({})} className="duration-300 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                        Create new link +
                                    </button>
                                    <table className="min-w-full">
                                        <thead className="shadow-xl border-2 border-gray-300">
                                            <tr>
                                                <th scope="col" className="text-sm font-medium text-gray-900 p-2 text-left">
                                                    #
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-4 text-left max-w-[200px]">
                                                    Title
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-4 text-left max-w-[200px]">
                                                    PubDate
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
                                            {data.map((blog, i) => {
                                                return <tr key={i} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td className="p-2 whitespace-nowrap text-sm font-medium text-gray-900">{i + 1}</td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-[210px] overflow-clip">
                                                        <span className="mb-2 block duration-300">{blog.title}</span>
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-[240px] overflow-clip">
                                                        <span className="mb-2 block duration-300">{timeConverter(blog.pubDate)}</span>
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {blog.clickCount}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <a href={"/admin/editor/" + blog.link} className="mr-2 duration-300 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
                                                            Edit
                                                        </a>
                                                        <button onClick={deletePost} className="duration-300 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
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
        </React.Fragment>
    )
}
export const getServerSideProps = withSessionSsr(
    async function getServerSideProps({ res, query, req }) {
        if (!req.session?.state?.isLoggedIn) {
            return {
                redirect: {
                    destination: '/admin/login',
                    permanent: false,
                }
            }
        } else {
            const db = await clientPromise
            var getDB = await db.db('personal-blog').collection('blog-post').find({}).toArray()
            return {
                props: {
                    data: JSON.parse(JSON.stringify(getDB.sort((a, b) => b.pubDate - a.pubDate)))
                }
            }
        }
    }
);

export default BlogAdmin