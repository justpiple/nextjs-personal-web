import React from "react";
import Headers from "../../components/Header";
import Footer from "../../components/blog/Footer";
import Navbar from "../../components/blog/NavBar";
import ActiveLink from "../../components/ActiveLink";
import clientPromise from "../../lib/mongodb";
import { timeConverter } from "../../lib/function"
import Script from "next/script";
import { ArticleJsonLd } from 'next-seo';
import dynamic from "next/dynamic"
const WysiwygViewer = dynamic(() => import('../../components/WysiwygViewer'), { ssr: false })

function copyLink(e) {
    navigator.clipboard.writeText(e.target.value).then(() => alert("Link copied!"))
}

function BlogPost({ data, latestPost, url }) {
    const viewerRef = React.useRef()
    viewerRef?.current?.viewerInst?.setMarkdown(data.post)
    return (
        <React.Fragment>
            <Headers title={data.title + " - itsben.space"} description="masben blog" shortlink={"https://l.itsben.space/" + data.short} />
            <ArticleJsonLd
                url={url}
                title={data.title}
                images={[
                    'https://itsben.space/assets/images/BG!.jpeg',
                ]}
                datePublished={new Date(data.pubDate).toISOString()}
                dateModified={new Date(data.pubDate).toISOString()}
                authorName={['ben']}
                publisherName="ben"
                publisherLogo="https://itsben.space/assets/img/ppimg.jpeg"
                description={data.description || "this is a post on my blog"}
            />
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
                                        <p className="text-gray-500">{data.clickCount} Clicks</p>
                                    </dl>
                                </header>
                                {/* <article className="prose" dangerouslySetInnerHTML={{ __html: data.post }}>
                                </article> */}
                                <div className="md:min-h-screen">
                                    <WysiwygViewer content={data} viewerRef={viewerRef} />
                                </div>
                            </div>
                            <div className="md:w-2/5 w-full md:ml-10 mt-16">
                                <div className="sticky top-6">
                                    <div>
                                        <h3 className="font-bold mb-2">Share this blog</h3>
                                        <input onClick={copyLink} placeholder="Posts Link" className="px-2 py-1 cursor-pointer w-full ring-1 ring-slate-900/10 bg-gray-100 border-2 border-gray-300 text-center rounded-md" value={"https://l.itsben.space/" + data.short} readOnly />
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
                                            {latestPost.map((post, i) => {
                                                return <li key={i}>
                                                    <ActiveLink href={`/blog/${post.link}`} className="hover:text-blue-400 transition-colors duration-300">{post.title}</ActiveLink >
                                                </li>
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
            <Script src="https://cdn.iframe.ly/embed.js?api_key=70d193779c4aa866c8b4de" async />
            <Script id="Iframe" async>{`
                        setTimeout(() =>{
                            document.querySelectorAll( 'oembed[url]' ).forEach( element => {
                                iframely.load( element, element.attributes.url.value );
                            });
                        }, 2000)
                        `}</Script>
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
    else if (process.env.NODE_ENV === 'production') db.db('personal-blog').collection('blog-post').updateOne({ link: slug }, { $inc: { clickCount: 1 } })
    var data = findPost + 1 ? JSON.parse(JSON.stringify(getDB.splice(findPost, 1)[0])) : {}
    res.setHeader("Link", `<${"https://l.itsben.space/" + data.short}>; rel="shortlink"`);
    return {
        props: {
            data,
            latestPost: JSON.parse(JSON.stringify(getDB.sort((a, b) => b.pubDate - a.pubDate))).slice(0, 3).map(x => ({ title: x.title, link: x.link })).filter(x => !x.link.includes('private')),
            url: `https://itsben.space/blog/${slug}`
        }
    }
}
export default BlogPost