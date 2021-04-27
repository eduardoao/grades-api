import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { db } from './models/index.js';
import  {router}   from './routes/gradeRoutes.js';


(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    process.exit();
  }
})();

const app = express();

//define o dominio de origem para consumo do servico
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(
//   cors({
//     origin: 'https://pure-anchorage-24580.herokuapp.com',
//   })
// );


// Set up a whitelist and check against it:
var whitelist = ['https://pure-anchorage-24580.herokuapp.com']

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


// Then pass them to cors:
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('API em execucao');
});

app.use('/grade', router);

app.listen(process.env.PORT || 8081, () => {});
