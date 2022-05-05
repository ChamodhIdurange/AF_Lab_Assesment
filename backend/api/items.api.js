import { v4 as uuidv4 } from "uuid";

const items = new Map();

export const createItem = (data) => {
  let generatedID = uuidv4();
  const item = {
    id: generatedID,
    name: data.name,
    price: data.price,
    description: data.description,
    insertdate: new Date(),
  };

  items.set(generatedID, item);

  return item;
};

export const getItemsById = (id) => {
  const item = items.get(id);
  if (!item) {
    throw new Error("item not found");
  }
  return item;
};

export const getAllItems = () => {
  return [...items.values()];
};

export const updateItem = (id, data) => {
  console.log(data);
  console.log("data");
  items.set(id, data);
  return items;
};
