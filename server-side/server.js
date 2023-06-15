const express = require('express')

const app = express();
app.use(express.json())
app.get('/api/weather/:city', (req, res) => {
    const SECRET = '975b6d82c2b14898a770072a6debb969'
    const lon = req.params.lat
    const lat = req.params.lat
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${SECRET}`
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json()
        })
        .then((result) => {
            res.status(200).send({
                required: true,
                data: { result }
            })
        })
        .catch((err) => {
            console.log(err.message)
            res.status(500).send({
                required: false,
                data: err.message
            });
        })
})
// express server 
require('dotenv').config();
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});