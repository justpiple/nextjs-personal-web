import clientPromise from "../../lib/mongodb";
import React, { useEffect } from "react";
import Headers from "../../components/Header";
import Footer from "../../components/blog/Footer";
import Navbar from "../../components/blog/NavBar";
import { useRouter } from 'next/router';

var randomString = (length) => {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyzsadw'
  let str = '';
  lengt = length || 9
  for (var i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * 65)];
  }
  return str
}


function Link() {
  return (
    <React.Fragment>
      <Headers title="404 Page not found - Short link" />
      <div className="mx-auto max-w-3xl px-2 xl:max-w-5xl">
        <div className="flex h-screen flex-col justify-between">
          <Navbar />
          <div className="font-inter mx-auto max-w-3xl pt-5 px-6 sm:px-6 xl:max-w-5xl xl:px-0">
            <h1 className="border-r-2 border-black p-4 inline-block mr-5 font-extrabold">
              404
            </h1>
            <div className="text-right inline-block" >
              <h2>This page could not be found.</h2>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment >
  )
}
export async function getServerSideProps({ res, query }) {
  const { lid } = query
  const db = await clientPromise
  var getDB = await db.db('personal-blog').collection('link').findOne({ id: lid })
  if (getDB) {
    await db.db('personal-blog').collection('link').updateOne({ id: getDB.id }, { $inc: { clickCount: 1 } })
    res?.writeHead(302, {
      Location: getDB.url,
    });
    res?.end();
  }
  else res.statusCode = 404
  return {
    props: {}
  }
}

export default Link