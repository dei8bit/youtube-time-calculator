
// const apiKey = "AIzaSyCQNbrPA0dgibE48mb0Lau0XYLIFlCUyq8"
import {SECRET_apiKey} from '$env/static/private'

export const load = () => {
        return { yt_apiKey: SECRET_apiKey }
}   