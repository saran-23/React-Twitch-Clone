import axios from 'axios';

export default axios.create({
    baseURL:'http://localhost:3001',
});


// export default axios.create ({
//             baseURL:'https://my-json-server.typicode.com'
// }
// )  