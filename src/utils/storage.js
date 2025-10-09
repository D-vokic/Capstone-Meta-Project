/**
 * A small utility wrapper for localStorage with JSON handling and error safety.
 * Usage:
 *   storage.set("key", data)
 *   const value = storage.get("key")
 *   storage.remove("key")
 */

export const storage = {
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (err) {
      console.error("Storage set error:", err);
      return false;
    }
  },

  get: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (err) {
      console.error("Storage get error:", err);
      return null;
    }
  },

  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (err) {
      console.error("Storage remove error:", err);
      return false;
    }
  },
};
