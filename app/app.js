import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/routesBroker';
import dotenv from 'dotenv';
import path from 'path';

//faz a leitura do arquivo .env por padrão
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//Vincula o react ao app
app.use(express.static(path.join(__dirname, 'client/build')));

const { DB_CONNECTION } = process.env;
console.log('Iniciado conexão com o Banco MongoDB');
mongoose.connect(
  DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      connectedToMongoDB = false;
      console.error(`Erro na conexão ao MongoDB - ${err}`);
    }
  }
);

const { connection } = mongoose;

connection.once('open', () => {
  connectedToMongoDB = true;
  console.log('Conectado ao MongoDB');

  const APP_PORT = process.env.PORT || 3001;
  app.listen(APP_PORT, () => {
    console.log(`Servidor iniciado na porta ${APP_PORT}`);
  });
});
