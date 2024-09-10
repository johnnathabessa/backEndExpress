import { cars } from "../db/db.js";

const Carscontroller = {
    getCars: (req, res) => {
        res.json(cars);
    },
    newCar: (req, res) => {
        const newCar = req.body;
    if (!newCar.brand || !newCar.model || !newCar.cilinders) {
        return res.status(400).json({ message: 'all fields are required' });
    }
    cars.push({
        ...newCar,
        id: cars.length + 1,
    });
    res.json(newCar);
    },
    deleteCar: (req, res) => {
        const {id}  = req.params;
    cars = cars.filter(car => car.id !== Number(id));
    res.json({message: 'car deleted'});
    },
    updateCar: (req, res) => {
    const {id}  = req.params;
    const updateCar = req.body;

    const updateCarkeys = Object.keys(updateCar);
    const updateCarValues = Object.values(updateCar);

    if(updateCarkeys.some(key => !['brand', 'model', 'cilinders'].includes(key))) {
        return res.status(400).json({ message: 'invalid fields' });
    }

    if(!updatedCarValues.every (value => value)) {
        return res.status(400).json({ message: 'all fields are required' });
    }
    cars = cars.map(car => {
        if (car.id === Number(id)) {
            return {
                ...car,
                ...updateCar
            }
        }    
        return car;
    });
    res.json({message: 'car updated'});
    }
}

export default Carscontroller;