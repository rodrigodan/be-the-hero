const express = require('express');

const OngController =require('./controllers/OngController');
const IncidentController = require('./controllers/incidentController');

const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// desacoplando o módulo de rotas do exprex e atribuindo a uma variável
const routes = express.Router();

routes.post('/sessions',SessionController.create);

routes.get('/ongs',OngController.index);
routes.post('/ongs', OngController.create);

// GET: buscar info no backend
// POST: Criar info no back-end
// PUT: Alterar uma info no backend
// DELETE: Delete uma info no backend


// query params: parametros enviados na rota após '?'(filtros, paginação)
// route params: parametros usados para identificar recursos(normalmente um único recurso) ex de recursos:/users/:id
// request body: corpo da requisição usada para criar ou altera recurso

// request guarda todos os dados que vem da requisão do usuário
// response consiste da resposta ao usuário
// routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index);


routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes;