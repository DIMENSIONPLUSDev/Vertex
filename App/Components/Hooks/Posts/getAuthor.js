import React from 'react'
import { useQuery } from "react-query";
import axios from "axios";

export default function getAuthor(user_id) {
    return useQuery(['author', user_id], async() =>{
        await axios.get(`https://dimensionplus.in/wp-json/wp/v2/users/${user_id}`)
    },{
        enabled: !!user_id,
    })
}
