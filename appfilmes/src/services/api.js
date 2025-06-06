import axios from "axios";
// https://sujeitoprogramador.com/r-api/?api=filmes


const api = axios.create({
    baseURL:'https://sujeitoprogramador.com/' // base url para n ter que escrever toda vez que for definir uma rota
});

export default api;