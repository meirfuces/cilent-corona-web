import axios from 'axios';
const url = 'https://radiant-woodland-94136.herokuapp.com/';



export const createApiClient = ()=> {
    return {
        getJsonState: async() =>{
            return axios.get(url)
            .then((res) => res.data);
        },  
        predictByCountry: async() =>{
            return axios.get("https://radiant-woodland-94136.herokuapp.com/predict")
            .then((res) => res.data);
        }
    }
    }
  
      

