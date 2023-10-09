const USER_KEY = 'user';

const userStorage = {
  setUser: (user) => localStorage.setItem(USER_KEY, JSON.stringify(user)),
  getUser: () => JSON.parse(localStorage.getItem(USER_KEY)),
  removeUser: () => localStorage.removeItem(USER_KEY),
};

export default userStorage;
