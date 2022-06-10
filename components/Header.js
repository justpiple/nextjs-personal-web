import React from "react";
import Head from 'next/head';

function Header({ title, description, shortlink }) {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scaleable=no" />
            <meta name="description" content="web portofolio" />
            <meta name="author" content="ben" />
            <meta name="theme-color" content="#8fd1c6" />
            <meta name="msapplication-TileColor" content="#8fd1c6" />
            <meta name="msapplication-TileImage" content="/icon/ms-icon-144x144.png" />
            <meta name="description" content={description || "hellow i'm ben."} />
            <meta name="keywords"
                content="ben, kusindra, kusindra aji rabbany, benirabbany, beni, kusindra, aji, rabbany, aji rabbany" />
            <meta name="robots" content="index, follow" />
            <meta name="og:description" content={description || "hellow i'm ben."} />
            <meta property="og:image" content="https://itsben.space/assets/images/BG!.jpeg" />
            <meta property="og:site_name" content="itsben.space - personal website" />
            <meta property="og:title" content={title || "benirabbany"} />
            <title>{title || "benirabbany"}</title>
            <link rel="apple-touch-icon" sizes="57x57" href="/icon/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/icon/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/icon/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/icon/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/icon/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/icon/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/icon/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/icon/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/icon/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/icon/favicon-96x96.png" />
            {shortlink ? <link rel="shortlink" href={shortlink} /> : ""}
        </Head>
    );
}
export default Header;