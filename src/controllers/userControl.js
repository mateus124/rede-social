const User = require("../entities/user");

const createUser = async (userData) => {
  const { name, password, description, age } = userData;
  try {
    const user = await User.create({
      name: name,
      password: password,
      description: description,
      age: age,
      followers: 0,
      follow: [],
    });
    return user;
  } catch (error) {
    throw new Error("Usuário não cadastrado: ", error);
  }
};

const updateUser = async (newData) => {};

module.exports = {
  createUser,
};
