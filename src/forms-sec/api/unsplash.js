import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com/',
    headers : {
        Authorization : "Client-ID f4dc7847bbd7f137bf595ea40c9901bc7ae7873695de0ee50d4265ef5081da56", 
    },
})