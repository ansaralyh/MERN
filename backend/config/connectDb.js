const mongoose = require('mongoose');


const connectToDb =  () => {
 mongoose.connect("mongodb://127.0.0.1:27017/Task"
)
  console.log(`database connected `)
        
};

module.exports = connectToDb;

