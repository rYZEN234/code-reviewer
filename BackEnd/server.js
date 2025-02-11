require('dotenv').config()  //by this we can access dotenv file variable
const app = require('./src/app')



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})