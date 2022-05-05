import { v4 as uuidv4 } from "uuid";

const traders = new Map();

export const createTrader = (data) => {
  let generatedID = uuidv4();
  const trader = {
    id: generatedID,
    name: data.name,
    tradername: data.tradername,
    password: data.password,
    insertdate: new Date(),
  };

  traders.set(generatedID, trader);

  return trader;
};

export const getTraderById = (id) => {
    const trader = traders.get(id);
    if (!trader) {
      throw new Error("trader not found");
    }
    return trader;
  };

export const getAllTraders = () => {
  return [...traders.values()];
};
