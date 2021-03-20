import { Friends } from "./dbConnectors.js";
const resolvers = {
  Query: {
    getFriend: ({ id }) => {
      return new Friend(id, friendDataBase[id]);
    },
  },
  Mutation: {
    createFriend: async (root, { input }) => {
      const newFriend = new Friends({
        firstName: input.firstName,
        lastName: input.lastName,
        gender: input.gender,
        language: input.language,
        age: input.age,
        email: input.email,
        contacts: input.contacts,
      });
      newFriend.id = newFriend._id;
      try {
        const result = await newFriend.save();
        return result;
      } catch (err) {
        console.error(err);
      }

      //      return new Promise((resolve, reject) => {
      //        newFriend.save((err) => {
      //          if (err) {
      //            reject(err);
      //          } else {
      //            resolve(newFriend);
      //          }
      //        });
      //      });
    },
    updateFriend: async (root, { input }) => {
      const filter = { _id: input.id };
      const updateObj = input;

      try {
        let result = await Friends.findOneAndUpdate(filter, updateObj, {
          new: true, // by default findOneAndUpdate returns the document before update was applied
        });
        console.log(result);
        return result;
      } catch (error) {
        console.error("updateFriend Error", error);
      }
    },
  },
};

export { resolvers };
