import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID b760b36616a1b2f63a4f57f381c5593c7625300a4da9f7caef2b43174f063a73',

    }
});