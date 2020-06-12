import axios from 'axios';

export const API_GATEWAY='http://localhost:8080';

// export const apiCall=(url:any,data:any,headers:any,method:any)=> axios({
//     method,
//     url,
//     data,
//     headers
// });

export const  apiCall=(url:any,data:any,method:any)=>{
    const config = {
        url: API_GATEWAY+url,
        data:data,
        method: method,
        baseURL: url,
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      };
       return axios.request(config);

}


    