import axios from 'axios';

export default axios.create(
    {
        baseURL: 'https://react-assignment-e4aa2-default-rtdb.firebaseio.com/'
    }
)