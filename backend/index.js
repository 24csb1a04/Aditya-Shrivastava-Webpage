import express from 'express';
import personalRoutes from './routes/personalRoutes.js';
import workRoutes from './routes/workRoutes.js';
const app = express()
const port = 5000;
app.use('/api/personal' , personalRoutes);
app.use('/api/work' , workRoutes);
app.listen(port , ()=>{
    console.log(`Server started at port ${5000}`);
});