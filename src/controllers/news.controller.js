const axios = require('axios');
require('dotenv').config();

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

class News {
  getAll(req, res) {
    console.log('Query params: ', req.query.test);
    const url = `${apiUrl}everything?q=bitcoin&sortBy=publishedAt&apiKey=${apiKey}`;
    axios.get(url).then(response => {
      res.send(response.data.articles);
    }).catch(e => {
      res.send('Oops! Failed!')
      res.end();
    })
  }

  getById(req, res) {
    res.send('Traer la noticia ' + req.params.noticiaID);
  }

  getSources(req,res){
    const url = `${apiUrl}sources?apiKey=${apiKey}`;
    axios.get(url).then(response => {
      res.send(response.data.sources);
    }).catch(e => {
      res.send('Oops! Failed!')
      res.end();
    })
  }

  getEverything(req,res){
    let source = req.params.source || ''
    const url = `${apiUrl}everything?q=${req.query.search}&sources=${source}&apiKey=${apiKey}`;
    axios.get(url).then(response => {
      res.send(response.data.articles);
    }).catch(e => {
      res.send('Oops! Failed!')
      res.end();
    })
  }

  getTopHeadlines(req,res){
    let country = req.params.country || 'mx';
    const url = `${apiUrl}top-headlines?country=${country}&apiKey=${apiKey}`;
    axios.get(url).then(response => {
      res.send(response.data.articles);
    }).catch(e => {
      res.send('Oops! Failed!')
      res.end();
    })
  }
}

module.exports = new News();

