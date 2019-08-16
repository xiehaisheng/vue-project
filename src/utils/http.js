const axios = require('axios');

const http = {
    get({url="", params={}}={}) {
        return axios({
            method: 'GET',
            url,
            params,
        })
        .then(function (response) {
            return response.data

        })
        .catch(function (error) {
            console.log(error);
        })
    }
}

export default http