const axios = require('axios');
var token = {
    "access_token": "BQDfJWaYNoHEkdlfaeK_U9j0b6-7edDS2cei8gBDE4gjdhJUjnvJqOK1q6l88lwBiurlDLfrZanxjwgV5BS5UaIj2KSfrmfjyBA4vzbZtveyKOEuaOxZp5lz17IqHxewTuTgFy5WCg1SlaMe1-f39oaPUb5l_FLzag0PPLYliRRcvQ",
    "token_type": "Bearer",
    "expires_in": 1649027096304,
    "scope": "user-read-currently-playing user-read-recently-played",
    "refresh_token": "AQA6W0UeV1vTWDupTy7GzY45-DDJHIpumd9Ys7gOq-Ut0IzfYZQUop9GIIQK7SuB20yNgdeoioFB8g3W_bk9QH6k_E1jE2qUdySAT978u1X-nQGL5B57YcAQXAUiMY1vSDg"
}

class Spotify {
    constructor(code) {
        this.code = code || "AQDDpIKjbhHVlsfb9gzDwrpM6NTAp31jK8FIOhlXr7lePRdAdH_76aOmJOGeoHj_QT7qIbPWrzV8I3OlnwabKHJeUKFX7FiT-HBmNjFeki1XjRrEVH8oOYnM_KHej3TpWVTsqLhBQNI02XIaf9-bx5-JsuxEiiKbLFfw7_v-QEs_G39-xAX0SFKZtJprT8aN2v0SLXIiV3h_1fAz3lWzyWI6AIx2CsX3pxPIMu8u-sf0"
        this.SPOTIFY_CLIENT_ID = "61521af281664c1da3a150a78a4c99d1"
        this.SPOTIFY_CLIENT_SECRET = "5a8cc18ee3284041b4c790d9d5efc762"
        this.SPOTIFY_URL_REFRESH_TOKEN = "https://accounts.spotify.com/api/token"
        this.SPOTIFY_URL_NOW_PLAYING =
            "https://api.spotify.com/v1/me/player/currently-playing?additional_types=track,episode"
        this.SPOTIFY_URL_RECENTLY_PLAY = "https://api.spotify.com/v1/me/player/recently-played?limit=10"
        this.SPOTIFY_URL_GENERATE_TOKEN = "https://accounts.spotify.com/api/token"
        this.SPOTIFY_URL_USER_INFO = "https://api.spotify.com/v1/me"
    }
    client_token() {
        return Buffer.from(`${this.SPOTIFY_CLIENT_ID}:${this.SPOTIFY_CLIENT_SECRET}`).toString('base64')
    }
    async generate_token() {
        const request = await axios(this.SPOTIFY_URL_GENERATE_TOKEN, {
            method: "post",
            "content-type": 'application/x-www-form-urlencoded',
            data: "grant_type=authorization_code&redirect_uri=https://benspace.xyz&code=" + this.code, headers: { "Authorization": `Basic ${this.client_token()}` }
        })
        return request.data
    }
    async user_token() {
        const token = this.getToken()
        if (Date.now() >= token["expires_in"]) {
            const newToken = await this.refresh_token(token["refresh_token"])
            // console.log(newToken)
            newToken.refresh_token = token.refresh_token
            newToken.expires_in = newToken.expires_in * 1000 + Date.now()
            this.saveToken(newToken)
            return newToken
        } else {
            return token
        }
    }
    async refresh_token(refresh_token) {
        const request = await axios(this.SPOTIFY_URL_GENERATE_TOKEN, {
            method: "post",
            "content-type": 'application/x-www-form-urlencoded',
            data: "grant_type=refresh_token&refresh_token=" + refresh_token, headers: { "Authorization": `Basic ${this.client_token()}` }
        })

        return request.data
    }
    async get_user_profile() {
        const getToken = await this.user_token()
        const request = await axios(this.SPOTIFY_URL_USER_INFO, { headers: { "Authorization": `Bearer ${getToken["access_token"]}` } })
        return request.data
    }
    async get_now_playing() {
        const getToken = await this.user_token()
        const request = await axios(this.SPOTIFY_URL_NOW_PLAYING, { headers: { "Authorization": `Bearer ${getToken["access_token"]}` } })
        if (request.status == 204) return null
        return request.data
    }
    async get_recent_playing() {
        const getToken = await this.user_token()
        const request = await axios(this.SPOTIFY_URL_RECENTLY_PLAY, { headers: { "Authorization": `Bearer ${getToken["access_token"]}` } })
        return request.data
    }
    saveToken(data) {
        return token = data
    }
    getToken() {
        return token
    }
    async get_status() {
        var get_now = await this.get_now_playing()
        var isPlaying = true;
        if (!get_now) {
            const get_recent = await this.get_recent_playing()
            get_now = get_recent.items[Math.floor(Math.random() * get_recent.items.length)].track;
            isPlaying = false
        } else get_now = get_now.item
        return {
            image: await this.image_base64(get_now.album.images[1].url),
            title: get_now.name.replace(/&/g, "&amp;"),
            artist: get_now["artists"][0]["name"].replace(/&/g, "&amp;"),
            url: get_now.external_urls.spotify,
            isPlaying
        }
    }
    async image_base64(url) {
        const getBuffer = await axios.get(url, { responseType: "arraybuffer" })
        return "data:image/png;base64," + getBuffer.data.toString('base64')
    }
}

// const spotify = new Spotify()
// async function x(){
//   var xx = await spotify.generate_token()
//   xx.expires_in = xx.expires_in*1000+Date.now()
//   spotify.saveToken(xx)
// }
// x()

module.exports = Spotify