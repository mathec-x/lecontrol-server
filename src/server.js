console.clear();
require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  if (process.env.NODE_ENV === 'development') { 
    console.log('running server at localhost:', PORT, process.env.NODE_ENV);
   }
});
