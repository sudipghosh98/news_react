import axios from 'axios';

export default axios.create(
    {
        headers: {
            "Authorization": 'Yhma907Hp9Yc5oVbZHKwDUe5o6nCV0jBD99l2DoL3SGEJxSM'
        },
        baseURL: 'https://api.currentsapi.services'       
    }
);