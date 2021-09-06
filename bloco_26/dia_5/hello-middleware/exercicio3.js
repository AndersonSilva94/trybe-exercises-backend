const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const verifyToken = (request, response, next) => {
  const { authorization } = request.headers;

  const tokenRegex = /^[0-9a-z]+/
  const testToken = tokenRegex.test(authorization);
  
  // console.log(authorization);

  if(authorization.length != 12 || !testToken)
    return response.status(400).json({ message: "invalid token" });

    next();
};

const fetchApi = async (_request, response) => {
  const apiData = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json'
  const fetchData = await axios.get(apiData)

  return response.status(200).json(fetchData.data);
}

app.get('/btc/price', verifyToken, fetchApi);

app.listen(3001, () => {
  console.log('Ouvindo na porta 3001');
})