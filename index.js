const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const arr = data.slice(1,-1).split(',');
    const user_id = "john_doe_17091999"; 
    const numArray = [];
    const alphaArray = [];
    arr.forEach(e=>{
      if(isNaN(e)){
        alphaArray.push(e.toUppercase());
      }
      else{
        numArray.push(+e);
      }
    })

    const email = "john@xyz.com";


    const uppercaseAlphabets = data.filter(char => /^[A-Za-z]$/.test(char)).map(char => char.toUpperCase())|| [];
    const evenNumbers = data.filter(num => num % 2 === 0) || [];
    const oddNumbers = data.filter(num => num % 2 !== 0) || [];


    const response = {
        user_id,
        is_success: true,
        email_id: email, 
        college_roll_number: "ABCD123", 
        array_even_numbers: evenNumbers,
        array_odd_numbers: oddNumbers,
        array_uppercase_alphabets: uppercaseAlphabets
    };

    res.status(200).json(response);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
