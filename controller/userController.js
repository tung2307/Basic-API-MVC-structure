const User = require('../model/User');

exports.getAllUsers =  async  (req, res, next ) => {
    try {
        const [user, _] = await User.getAll();
        
        res.status(200).json({count: user.length, user}); 
    } catch (error) {
        console.log(error);
        next(error);  
    }
}

exports.createNewUser = async (req, res, next) => {
    try {
        //parse json
        let {firstname, lastname, email, password, location} = req.body;

        register = await User.save(firstname, lastname, email, password, password);

        res.status(201).json({ message: "User created "});
    } catch (error) {
        console.log(error);
        next(error);   
    }

}