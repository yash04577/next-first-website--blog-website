const testFolder = './blog-data';
const fs = require('fs');

export default function handler(req, res) {

    const test = fs.readFileSync(`${testFolder}/${(req.query.id)}.json`)
    res.status(200).json({ data:  JSON.parse(test)})
}

