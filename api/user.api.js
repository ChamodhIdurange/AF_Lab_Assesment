import { v4 as uuidv4 } from "uuid";

const users = new Map();

export const createUser = (data) => {
  let generatedID = uuidv4();
  const user = {
    id: generatedID,
    name: data.name,
    username: data.username,
    password: data.password,
    type: data.type,
    insertdate: new Date(),
  };

  users.set(generatedID, user);

  return user;
};

export const getUserById = (id) => {
    const user = users.get(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  };

export const getAllUsers = () => {
  return [...users.values()];
};

//Figure this
export const getUsersByType = () => {
    return [...users.values()];
};
