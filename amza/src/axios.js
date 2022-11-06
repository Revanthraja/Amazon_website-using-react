import axios from "axios";

const instance=axios.create({
    baseURL:'http://localhost:5001/fir-1bc64/us-central1/api'
})

export default instance;