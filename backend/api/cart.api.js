import { v4 as uuidv4 } from "uuid";

const carts = new Map();

export const addToCart = (data) => {
  let generatedID = uuidv4();
  const cart = {
    id: generatedID,
    itemid: data.itemid,
    userid: data.userid,
    quantity: data.quantity,
    totalprice: data.price,
    insertdate: new Date(),
  };

  carts.set(generatedID, cart);

  return cart;
};

export const getCartByUserId = (passedid) => {
  //   const cart = carts.get(userid);
  let dataholder = [];
  for (const [key, value] of carts) {

    if (value.userid == passedid) {
      dataholder.push(value);
    }
  }

  console.log(dataholder);
  if (!dataholder) {
    throw new Error("Cart not found");
  }
  return dataholder;
};

export const getAllcarts = () => {
  return [...carts.values()];
};

export const updateCart = (id, data) => {
  carts.set(id, data);
  return carts;
};

export const removeFromCart = (id) => {
  carts.delete(id);
  return carts;
};
