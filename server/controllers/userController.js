const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('../models/models');
const {sign} = require("jsonwebtoken");

const generateJwt = (id, login, first_name, last_name) => {
    return jwt.sign(
        {id: id, login, first_name, last_name},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    );
}

class UserController{
    async registration(req, res, next){
        const {login, password, first_name, last_name} = req.body;
        if(!login || !password){
            return next(ApiError.badRequest('Не задан логин или пароль!'));
        }

        const candidate = await User.findOne({where: {login}});
        if(candidate){
            return next(ApiError.badRequest('Пользователь с таким логином уже существует!'));
        }

        const hashPassword = await  bcrypt.hash(password, 5);
        const user = await User.create({login, first_name, last_name, password: hashPassword});
        const token = generateJwt(user.id, user.login, user.first_name, user.last_name);

        return res.json({token});
    };

    async login(req, res, next){
        const {login, password} = req.body;
        const user = await User.findOne({where:{login}});
        if(!user){
            return next(ApiError.internal('Пользователь с таким логином не найден!'));
        }

        let comparePassword = bcrypt.compareSync(password, user.password);

        if(!comparePassword){
            return next(ApiError.internal('Не верный пароль!'));
        }

        const token = generateJwt(user.id, user.login, user.first_name, user.last_name);

        return res.json({token});
    };

    async check(req, res, next){

        res.json({message: 'Work!'});
    };
}

module.exports = new UserController();