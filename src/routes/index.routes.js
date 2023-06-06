import { Router } from "express";

const routerIndex = Router();

routerIndex.all('/', (_req, res) => res.send('Bienvenidos a mi API'));

export default routerIndex;