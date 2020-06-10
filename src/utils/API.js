import axios from "axios";


export default {


    getEmployees: function(userAmount) {
        return axios.get(`https://randomuser.me/api/?results=${userAmount}`);
    }
}