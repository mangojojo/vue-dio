import axios from 'axios'
const baseURL = ''

const GET = (url, params) => axios.get(`${baseURL}${url}`, { params })
const POST = (url, params) => axios.get(`${baseURL}${url}`, { params })

export default {}
