import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:3005',
    headers: {
        'Content-Type': 'application/json',
    }
})

export function add_product(product){
    return api.post('/create',product)
}

export function get_product(product){
    return api.get('/serve')
}

export default api;