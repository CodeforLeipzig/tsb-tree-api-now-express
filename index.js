const express = require('express');

const checkJwt = require('./auth/');

const getWateredAndAdopted = require('./requests/get-watered-and-adopted');
const getWateredTrees = require('./requests/get-watered-trees');
const getAdoptedTrees = require('./requests/get-adopted-trees');
const getAdoptedTreesDetails = require('./requests/get-adopted-trees-details');
const getTree = require('./requests/get-tree');
const getAllTrees = require('./requests/get-all-trees');
const getTreeLastWatered = require('./requests/get-tree-last-watered');
const getIsTreeAdopted = require('./requests/get-is-tree-adopted');
const getWateredTreesByUser = require('./requests/get-watered-trees-by-user');
const adoptTree = require('./requests/adopt-tree');
const createUser = require('./requests/create-user');
const unadoptTree = require('./requests/unadopt-tree');
const waterTree = require('./requests/water-tree');
// const waterTreeArr = require('./requests/water-tree-arr')
const getTreeByAge = require('./requests/get-tree-by-age');
const countTreeByAge = require('./requests/count-tree-by-age');
const pkg = require('./package.json');
const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

app.use(express.json());

app.listen(process.env.PORT, err => {
  if (err) throw err;
  console.log(`> Ready On Server http://localhost:`);
});

app.get('/get', (req, res, next) => {
  res.json({
    version: pkg.version,
  });
});

app.get('/get-tree', getTree);

app.get('/get-tree-last-watered', getTreeLastWatered);

app.get('/count-tree-by-age', countTreeByAge);

app.get('/get-watered-and-adopted', getWateredAndAdopted);

app.get('/get-tree-by-age', getTreeByAge);

app.get('/get-all-trees', getAllTrees);

app.get('/private/water-tree', checkJwt, waterTree);

app.get('/private/get-watered-trees-by-user', checkJwt, getWateredTreesByUser);

app.get('/private/create-user', checkJwt, createUser);

app.get('/private/get-is-tree-adopted', checkJwt, getIsTreeAdopted);

app.get('/get-watered-trees', getWateredTrees);

app.get('/private/adopt-tree', checkJwt, adoptTree);

app.get('/private/unadopt-tree', checkJwt, unadoptTree);

app.get('/private/get-adopted-trees', checkJwt, getAdoptedTrees);

app.get('/private/get-adopted-trees-details', checkJwt, getAdoptedTreesDetails);

// app.post('/post', function (request, response) {
//   response.send(request.body);
// });
