const storage = {
  getItem(name) {
    return (typeof window !== 'undefined') && JSON.parse(window.localStorage.getItem(name));
  },

  setItem(name, data) {
    return (typeof window !== 'undefined') && window.localStorage.setItem(name, JSON.stringify(data));
  },

  removeItem(name) {
    return (typeof window !== 'undefined') && window.localStorage.removeItem(name);
  },
};

export default storage;
