import React, { useEffect } from "react";
import Headers from "../../components/Header";
import Footer from "../../components/blog/Footer";
import Navbar from "../../components/blog/NavBar";
import { useRouter } from 'next/router';
import ActiveLink from "../../components/ActiveLink";
import clientPromise from "../../lib/mongodb";
import { timeConverter } from "../../lib/function";

function PreviewBlog({ pubDate, labels, title, link, textPreview }) {
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
                                    <ActiveLink className="text-gray-900 duration-300 hover:text-cyan-500" href={"/blog/" + link}>
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
                            <ActiveLink className="duration-300 hover:text-cyan-500" href={"/blog/" + link}>
                                Read more →
                            </ActiveLink>
                        </div>
                    </div>
                </div>
            </article>
        </li >
    )
}

function BlogHome({ data }) {
    const router = useRouter()
    const { slug } = router.query

    return (
        <React.Fragment>
            <Headers title="masben.studio - Blog" />
            <div className="mx-auto max-w-3xl px-2 xl:max-w-5xl">
                <div className="flex h-screen flex-col justify-between">
                    <Navbar />
                    <div className="font-inter text-base mx-auto max-w-3xl pt-5 px-6 sm:px-6 xl:max-w-5xl xl:px-0">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            {data ? data.map(blog => {
                                return <PreviewBlog
                                    title={blog.title}
                                    pubDate={blog.pubDate}
                                    labels={blog.labels}
                                    textPreview={blog.post.slice(0, 250) + "..."}
                                    link={blog.link}
                                    key={blog._id} />
                            }) : null}
                        </ul>
                        <div className="flex justify-end text-base font-medium leading-6"><ActiveLink className="text-cyan-300 duration-300 hover:text-teal-500" href="/blog">All Posts →</ActiveLink></div>
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment >
    )
}
export async function getServerSideProps({ res, query }) {
    const db = await clientPromise
    var getDB = await db.db('personal-blog').collection('blog-post').find({}).toArray()
    return {
        props: {
            data: JSON.parse(JSON.stringify(getDB.sort((a, b) => b.pubDate - a.pubDate)))
        }
    }
}
export default BlogHome