import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import model from '../db/models/users';
import jwt from 'jsonwebtoken';
import isAuth from "./../middlewares/isAuth"

dotenv.config();

const { Users } = model;

let users=[]; 

module.exports = {
 signup : async (args) => {
// This is for data structure the remaining is to connect to postgres database

   try {
     const findUser = await users.find(user => user.email === args.email);
     if(findUser) {
       throw new Error('User already exist!');
     }
      const user = {
        id:users.length+1,
        firstname: args.firstname,
        lastname:args.lastname,
        email:args.email,
        password: bcrypt.hashSync(args.password, 10)
      } 
      users.push(user)
      return user;
     
   } catch (err) {
     throw err;
   }
  },

  getAllUsers : (req) => {
    if(!req.isAuth){
      throw new Error('Anauthenticated!');
    }
      return users;
  },
  
  login: async (args) => {
    const findUser = await users.find(user => user.email === args.email);
    if(!findUser) {
      throw new Error('Email not exist!');
    }
    const comparePassword = bcrypt.compareSync(args.password, findUser.password);
    if (!comparePassword) {
      throw new Error('Incorrect password');
    }
    const payload = {
      id: findUser.id,
      firstname: findUser.firstname,
      lastname: findUser.lastname,
      email: findUser.email,
      role: findUser.role
    }
  
    const token = jwt.sign(payload, `${process.env.SECRET_JWT_KEY}`, {expiresIn: '24h'});
    return {userId: findUser.id, token:token, tokenExpiration: 24} ;
  }
}
