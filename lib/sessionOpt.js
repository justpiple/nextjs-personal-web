const options = {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: 'sessionnext',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
    },
}
export default options 