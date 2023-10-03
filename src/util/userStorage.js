const USER_KEY = 'user';

const userStorage = {
  getUser: () => JSON.parse(localStorage.getItem(USER_KEY)),
  setUser: (user) => localStorage.setItem(USER_KEY, user),
  removeUser: () => localStorage.removeItem(USER_KEY),
};

export default userStorage;
