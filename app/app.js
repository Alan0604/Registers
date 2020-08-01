import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/routesBroker';
import dotenv from 'dotenv';
import path from 'path';

//faz a leitura do arquivo .env por padrão
dotenv.config();

const app = express();
app.use;
