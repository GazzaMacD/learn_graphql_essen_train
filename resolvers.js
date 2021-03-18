import crypto from "crypto";
const friendDataBase = {};

class Friend {
  constructor(id, { firstName, lastName, gender, age, email, contacts }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.email = email;
    this.contacts = contacts;
  }
}

const resolvers = {
  getFriend: ({ id }) => {
    console.log(friendDataBase);
    return new Friend(id, friendDataBase[id]);
  },
  createFriend: ({ input }) => {
    let id = crypto.randomBytes(10).toString("hex");
    friendDataBase[id] = input;
    console.log(friendDataBase);
    return new Friend(id, input);
  },
};

export default resolvers;
