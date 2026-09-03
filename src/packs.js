const callingPacks = [
  { id: "in-100", country: "India", minutes: 100, price: 9.99 },
  { id: "mx-100", country: "Mexico", minutes: 100, price: 8.99 },
  { id: "ph-100", country: "Philippines", minutes: 100, price: 7.99 },
];

function listPacks() {
  return callingPacks;
}

function getPackById(id) {
  return callingPacks.find((pack) => pack.id === id) || null;
}

module.exports = { callingPacks, listPacks, getPackById };
