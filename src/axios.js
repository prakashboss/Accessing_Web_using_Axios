import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

instance.defaults.headers.common['Authorizatio'] = 'auth - token from instance'
instance.defaults.headers.post['content-type'] = 'application/json'

export default instance;