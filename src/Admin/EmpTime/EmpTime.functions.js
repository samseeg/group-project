const axios = require('axios');

module.exports = {
    getEmpTimeCard(url) {
        console.log("hey")
        return axios.get('http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang').then( response => {
            return response.data;
        })
    }
}