var express = require('express');
var router = express.Router();
var axios = require('axios');

const api_dados = 'http://engweb-teste-backend-1:16000';

router.get('/', async (req, res) => {
  axios.get(`${api_dados}/contratos`)
      .then(response => {
        let contratos = response.data;
        res.render('index', {contratos: contratos});
      })
      .catch(_error => {
        res.status(500).send('Erro ao obter contratos');
      });
});

router.get('/entidades/:nipc', async (req, res) => {
  axios.get(`${api_dados}/contratos?entidade=${req.params.nipc}`)
      .then(response => {
        let contratos = response.data;
        if (!contratos || contratos.length === 0) {
          res.status(404).send('Entidade não encontrada');
          return;
        }

        let entidade = contratos[0];
        let entidade_nipc = entidade.NIPC_entidade_comunicante;
        let entidade_nome = entidade.entidade_comunicante;

        let preco = contratos.reduce((acc, contrato) => acc + contrato.precoContratual, 0);

        res.render('entidade', {
          contratos: contratos,
          entidade_nipc: entidade_nipc,
          entidade_nome: entidade_nome,
          preco: preco
        });
      })
      .catch(_error => {
        res.status(500).send('Erro ao obter contratos');
      });
});

router.get('/:id', async (req, res) => {
  axios.get(`${api_dados}/contratos/${req.params.id}`)
      .then(response => {
        let contrato = response.data;
        res.render('contrato', {contrato: contrato});
      })
      .catch(_error => {
        res.status(500).send('Erro ao obter contrato');
      });
});

module.exports = router;
