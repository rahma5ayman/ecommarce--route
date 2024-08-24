import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'

export default function useBroudct() {
    function getRecent() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    }

let responseObject =  useQuery({
        queryKey:['resentPrduct'],
        queryFn:getRecent
    })
return ( responseObject

)
}
