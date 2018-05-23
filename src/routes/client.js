const User =  require('../models/clients');

module.exports = app => {
    
    app.get('/cliente', (req, res) => {
         User.getUsers((err,data) => {
             res.status(200).json(data);
         });
     });

    
}