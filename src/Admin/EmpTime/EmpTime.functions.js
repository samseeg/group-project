const axios = require('axios');

module.exports = {
    getEmpTimeCard(url) {
        console.log("hey")
        return axios.get(url).then( response => {
            return response.data;
        })
    }
}