const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const BASE_ENDPOINT =  import.meta.env.VITE_API_BASE_ENDPOINT;

if(!BASE_URL){
    throw new Error('BASE_URL not found in environment variables.');
}


export {BASE_URL,BASE_ENDPOINT};