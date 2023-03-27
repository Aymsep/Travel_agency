import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:3005',
    headers: {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data',
    }
})


export function add_product(product){
    return api.post('/create',product)
}

export function get_product(product){
    return api.get('/serve')
}

export function get_one_product(id){
    return api.get(`/details/${id}`)
}

export function delete_product(product){
    return api.post(`/delete/${product}`)
}

export function delete_All_products(){
    return api.delete('delete')
}

export default api;