import React, { useEffect } from "react";
import Headers from "../../../components/Header";
import Footer from "../../../components/blog/Footer";
import Navbar from "../../../components/blog/NavBar";
import { useRouter } from 'next/router';
import ActiveLink from "../../../components/ActiveLink";
import clientPromise from "../../../lib/mongodb";


function BlogHome({ data }) {
    const router = useRouter()
    const { tags } = router.query

    return (
        <React.Fragment>
            <Headers title="Tags - masben.studio" />
            <div className="mx-auto max-w-3xl px-2 xl:max-w-5xl">
                <div className="flex h-screen flex-col justify-between">
                    <Navbar />
                    <div className="font-inter mx-auto max-w-3xl pt-5 px-6 sm:px-6 xl:max-w-5xl xl:px-0">
                        {Object.entries(data).map((d, i) => {
                            return <ActiveLink key={i} href={`/blog/tags/${d[0]}`} className="text-gray-500 ml-3 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">{d[0]} ({d[1]})</ActiveLink>
                        })}
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
    var counts = {}
    var conc = []
    var tagList = getDB.map(x => x.labels)
    for (var i of tagList) {
        conc = conc.concat(i)
    }
    conc.forEach((x) => { counts[x] = (counts[x] || 0) + 1; });
    return {
        props: {
            data: counts
        }
    }
}
export default BlogHome