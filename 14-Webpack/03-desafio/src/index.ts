import express from 'express';
import MainRouter from './routes/index';

const app = express();
const puerto = process.env.PORT || 8080;

app.listen(puerto, () => console.log("SERVER UP"));

app.use('/api', MainRouter);


app.use((req, res) => {
    res.status(404).json({
      msg: 'Ruta no encontrada',
    });
  });
  