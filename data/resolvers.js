import { Friends, Aliens } from "./dbConnectors.js";
const resolvers = {
    Query: {
        getAliens: async () => {
            try {
                // using sequelize model
                const aliens = await Aliens.findAll();
                return aliens;
            } catch (err) {
                console.error(err);
            }
        },
        getAllFriends: async () => {
            try {
                // using mongoose model
                const friends = await Friends.find({});
                return friends;
            } catch (err) {
                console.error(err);
            }
        },
        getOneFriend: async (root, { id }) => {
            try {
                const friend = await Friends.findById(id);
                return friend;
            } catch (err) {
                console.error(err);
            }
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
        deleteFriend: async (root, { id }) => {
            const filter = { _id: id };
            try {
                let result = await Friends.deleteOne(filter);
                console.log(result);
                return `Success!! Removed friend with id ${id}`;
            } catch (error) {
                console.error("deleteFriend Error", error);
            }
        },
    },
};

export { resolvers };
