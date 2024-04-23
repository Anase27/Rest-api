const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const user_id = 'john_doe_17091999';

app.use(bodyParser.json());


app.get('/',(req,res) => {
    res.status(200).json({
        "msg" : "hello"
    });
})

app.post('/bfhl', (req, res) => {
    try {
        // Get the input array from the request body
        const inputArray = req.body.array;

        // Split the input array into even numbers, odd numbers, and alphabets
        const evenNumbersArray = inputArray.filter(num => num % 2 === 0);
        const oddNumbersArray = inputArray.filter(num => num % 2 !== 0);
        const alphabetArray = inputArray.filter(char => isNaN(char));

        // Convert alphabets to uppercase
        const uppercaseAlphabets = alphabetArray.map(char => char.toUpperCase());

        // Prepare the response object
        const response = {
            "user_id": user_id,
            "is_success": true,
            "data": {
                "status": "success",
                "user_id": user_id,
                "email_id": "example@example.com",
                "college_roll_number": "123456",
                "even_numbers_array": evenNumbersArray,
                "odd_numbers_array": oddNumbersArray,
                "uppercase_alphabets_array": uppercaseAlphabets
            }
        };

        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "An error occurred while processing the request" });
    }
});

app.listen(port, () => {
    console.log(`REST API server is running at http://localhost:${port}`);
});
