
import axios from 'axios'
import { FigureCaption } from 'react-bootstrap'

let beasUrl =`https://ecommerce.routemisr.com/api/v1`
let token = localStorage.getItem("userToken")
export default function addtoCardApi(productId) {
return (
    axios.post(`${beasUrl}/cart` ,{productId} ,
    {headers:{
        token
    }}
    )
)
}

export function getCardApi() {
return  axios.get(`${beasUrl}/cart` , 
    {headers:{
        token
    }}
    )
}

 export function deleteItem(id) {
    return axios.delete(`${beasUrl}/cart/${id}` ,
    {headers: {
        token
    }}
    )
}

 export function updateItem({id , count}) {
    return axios.put(`${beasUrl}/cart/${id}`,{count} ,
    {headers: {
        token
    }}
    )
}

 export function clearCart() {
    return axios.delete(`${beasUrl}/cart` ,
    {headers: {
        token
    }}
    )
}



