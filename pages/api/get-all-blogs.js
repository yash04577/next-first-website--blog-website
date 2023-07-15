const testFolder = './blog-data';
const fs = require('fs');

export default function handler(req, res){

    let data = [];
    fs.readdirSync(testFolder).forEach(file => {
        const test = fs.readFileSync(`${testFolder}/${file}`)
        console.log(test);
        data.push(JSON.parse(test));
    });
    res.status(200).json({ data: data})
}

