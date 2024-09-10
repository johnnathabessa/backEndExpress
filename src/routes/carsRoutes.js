import { Router } from "express";
import Carscontroller from "../controllers/cars.js";

const router = Router();

router.get('/cars', Carscontroller.getCars);
router.post('/cars', Carscontroller.newCar);
router.delete('/cars/:id', Carscontroller.deleteCar);
router.put('/cars/:id', Carscontroller.updateCar);

export default router;
