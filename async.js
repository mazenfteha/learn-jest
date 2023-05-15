//we going to have a function that is going to make api request
//or an http request to fetch some data and it's going to that data

const axios = require('axios');

const fetchData = async (id) => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return result.data;
}

fetchData(1);

module.exports = fetchData;