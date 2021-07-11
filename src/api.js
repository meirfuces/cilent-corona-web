import axios from 'axios';
const url = 'http://localhost:5000';



export const createApiClient = ()=> {
    return {
        getJsonState: async() =>{
            return axios.get(url)
            .then((res) => res.data);
        },  
        predictByCountry: async() =>{
            return axios.get("http://localhost:5000/predict")
            .then((res) => res.data);
        }
    }
    }
  
      

