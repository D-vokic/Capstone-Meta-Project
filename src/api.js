export const fetchAPI = (date) => {
  let result = [];
  const random = seedRandom(date);

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

export const submitAPI = (formData) => {
  return true;
};

// Helper – random generator
function seedRandom(seed) {
  let m = 2 ** 35 - 31;
  let a = 185852;
  let s = seed.getDate();

  return function () {
    return (s = (s * a) % m) / m;
  };
}
