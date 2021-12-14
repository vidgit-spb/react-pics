import axios from 'axios';

export default axios.create ({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID D8q0gNwjBbqfQekyR4gBbJH-geW70jOxTKI9cslraoU",
      },
})