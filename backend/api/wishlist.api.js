import { v4 as uuidv4 } from "uuid";

const wishLists = new Map();

export const addToWishList = (data) => {
  let generatedID = uuidv4();
  const wishList = {
    id: generatedID,
    itemID: data.itemID,
    userID: data.userID,
    insertdate: new Date(),
  };

  items.set(generatedID, wishList);

  return item;
};

export const getWisListByUserId = (id) => {
  const wishList = items.get(id);
  if (!wishList) {
    throw new Error("item not found");
  }
  return wishList;
};

export const getAllWishList = () => {
  return [...wishLists.values()];
};

export const removeFromWishList = (id) => {
  wishLists.delete(id);
  return wishLists;
};
