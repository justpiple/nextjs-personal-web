import React, { useEffect } from "react";
import Headers from "../../components/Header";
import Footer from "../../components/blog/Footer";
import Navbar from "../../components/blog/NavBar";
import ActiveLink from "../../components/ActiveLink";
import { useRouter } from 'next/router';
import clientPromise from "../../lib/mongodb";
import { unreset } from "../../styles/unreset.module.css";
import { timeConverter } from "../../lib/function"

function copyLink(e) {
    navigator.clipboard.writeText(e.target.value).then(() => alert("Link copied!"))
}

function BlogPost({ data, latestPost }) {
    const router = useRouter()
    const { slug } = router.query

    return (
        <React.Fragment>
            <Headers title={data.title + " - masben.studio"} />
            <div className="mx-auto max-w-4xl px-2 xl:max-w-5xl">
                <div className="flex h-screen flex-col justify-between">
                    <Navbar />
                    <div className="font-inter text-base mx-auto max-w-4xl pt-5 px-6 sm:px-6 xl:max-w-5xl xl:px-0">
                        <div className="flex md:flex-row flex-col justify-center mt-5">
                            <div className="md:min-w-[521px] pb-10 pt-10 md:w-5/6 md:mr-5 w-full">
                                <header className="xl:pb-4">
                                    <div className="border-b border-gray-400">
                                        <h1 className="pb-6 text-center text-2xl font-extrabold leading-9 tracking-tight sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">{data.title}</h1>
                                    </div>
                                    <dl className="pb-4 pt-4">
                                        <span className="text-gray-500">Posted by <a className="transition-color duration-300 hover:text-cyan-300" href="https://instagram.com/kusindr_" target="_blank" rel="noopener noreferrer">ben</a></span>
                                        <span className="px-2">|</span>
                                        <span className="text-gray-500">{timeConverter(data.pubDate)}</span>
                                    </dl>
                                </header>
                                <article className={unreset + " font-inter"} dangerouslySetInnerHTML={{ __html: data.post }}>
                                </article>
                            </div>
                            <div className="md:w-2/5 w-full md:ml-10 mt-16">
                                <div className="sticky top-6">
                                    <div>
                                        <h3 className="font-bold mb-2">Share this blog</h3>
                                        <input onClick={copyLink} placeholder="Posts Link" className="px-2 py-1 cursor-pointer w-full ring-1 ring-slate-900/10 bg-gray-100 border-2 border-gray-300 text-center rounded-md" value={"https://masben.studio" + router.asPath} readOnly />
                                    </div>
                                    <div className="py-4">
                                        <h3 className="font-bold mb-2">Tags</h3>
                                        <ul>
                                            {data.labels ? data.labels.map(label => {
                                                return <li key={label}> <ActiveLink className="text-teal-500 mr-3 text-sm italic duration-300 hover:text-cyan-600" href={"/blog/tags/" + label}>{label}</ActiveLink></li>
                                            }) : null}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold py-4">Latest Post</h3>
                                        <ul className="space-y-2 list-disc">
                                            {latestPost ? latestPost.map(post => {
                                                return <li key={post._id}>
                                                    <ActiveLink href={`/blog/${post.link}`} className="hover:text-blue-400 transition-colors duration-300">{post.title}</ActiveLink >
                                                </li>
                                            }) : null}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment >
    )
}
export async function getServerSideProps({ res, query }) {
    var { slug } = query
    slug = slug.join('/')
    const db = await clientPromise
    var getDB = await db.db('personal-blog').collection('blog-post').find({}).toArray()
    var findPost = getDB ? getDB.findIndex(x => x.link == slug) : -1
    if (!(findPost + 1)) {
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            }
        }
    }
    // else await db.db('personal-blog').collection('blog-post').updateOne({ link: slug }, { $inc: { clickCount: 1 } })
    return {
        props: {
            data: findPost + 1 ? JSON.parse(JSON.stringify(getDB.splice(findPost, 1)[0])) : {},
            latestPost: JSON.parse(JSON.stringify(getDB.sort((a, b) => b.pubDate - a.pubDate)))
        }
    }
}
export default BlogPost