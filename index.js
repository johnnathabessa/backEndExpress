import express from 'express';

const app = express();

const PORT = 3000;

const AUTHORIZATION_UUID = '12345';

let cars = [
    {id:1, brand: 'BMW', model: 'X5', cilinders: 6},
    {id:2, brand: 'Audi', model: 'Q7', cilinders: 5},
    {id:3, brand: 'Volkswagen', model: 'Passat', cilinders: 4},
]

app.use(express.json());

app.use((req, res, next) => {
    console.log(`REQUEST: ${req.method} ${req.url} ${new Date().toTimeString()}`);
    next();
})

app.use((req, res, next) => {
    if (req.headers.authorization !== AUTHORIZATION_UUID) {
        return res.status(401).json({ message: 'unauthorized' });
    }
    next();
})

app.get('/cars', (req, res) => {
    res.json(cars);
});

app.post('/cars', (req, res) => {
    const newCar = req.body;
    if (!newCar.brand || !newCar.model || !newCar.cilinders) {
        return res.status(400).json({ message: 'all fields are required' });
    }
    cars.push({
        ...newCar,
        id: cars.length + 1,
    });
    res.json(newCar);
});

app.delete('/cars/:id', (req, res) => {
    const {id}  = req.params;
    cars = cars.filter(car => car.id !== Number(id));
    res.json({message: 'car deleted'});
});

app.put('/cars/:id', (req, res) => {
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
})
app.listen(PORT, () => {    
    console.log(`Server running on port ${PORT}`);
})

