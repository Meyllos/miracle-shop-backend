
let items=[]; 

import model from '../db/models/items';
import isAuth from "../middlewares/isAuth"
import { async } from 'regenerator-runtime';

const { Users, Items } = model;

module.exports = {
 createItem : async (args) => {
   try {
     const findItem = await items.find(item => item.name === args.name);
     if(findItem) {
       throw new Error('Item already exist!');
     }
      const item = {
        id: items.length+1,
        name: args.name,
        image: args.image,
        price: args.price,
        quality: args.quality,
        quantity: args.quantity,
        barometer: args.barometer,
        category: args.category,
        moreDetails: args.moreDetails
      } 

      items.push(item)
      return item;
     
   } catch (err) {
     throw err;
   }
},

getItem: async (args) => {

  const id = args.id;

  const findItem = await items.find(item => item.id === args.id);
    if(!findItem) {
       throw new Error('No item found!');
    }

  return {
    name: findItem.name,
    image: findItem.image,
    price: findItem.price,
    quality: findItem.quality,
    quantity: findItem.quantity,
    barometer: findItem.barometer,
    category: findItem.category,
    moreDetails: findItem.moreDetails,
  } ;
},

getAllItems : async (req) => {
  if(items.length === 0){
    throw new Error('No Item created!')
  }
  return items;
}
}
