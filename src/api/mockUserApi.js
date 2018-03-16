import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [
  {
    id: 'yen-le',
    firstName: 'Yen',
    lastName: 'Le'
  },
  {
    id: 'suli-huang',
    firstName: 'Suli',
    lastName: 'Huang'
  },
  {
    id: 'ben-chafik',
    firstName: 'Ben',
    lastName: 'Chafik'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (user) => {
  return user.firstName.toLowerCase() + '-' + user.lastName.toLowerCase();
};

class mockUserApi {
  static getAllUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }

  static saveUser(user) {
	user = Object.assign({}, user); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minUserNameLength = 3;
        if (user.firstName.length < minUserNameLength) {
          reject(`First Name must be at least ${minUserNameLength} characters.`);
        }

        if (user.lastName.length < minUserNameLength) {
          reject(`Last Name must be at least ${minUserNameLength} characters.`);
        }

        if (user.id) {
          const existingUserIndex = users.findIndex(a => a.id == user.id);
          users.splice(existingUserIndex, 1, user);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          user.id = generateId(user);
          users.push(user);
        }

        resolve(user);
      }, delay);
    });
  }

  static deleteUser(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfUserToDelete = users.findIndex(user => {
          user.id == userId;
        });
        users.splice(indexOfUserToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default mockUserApi;