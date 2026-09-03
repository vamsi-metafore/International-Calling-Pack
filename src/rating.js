function rateCall(minutesUsed, ratePerMinute) {
  return Number((minutesUsed * ratePerMinute).toFixed(2));
}

function isWithinPack(minutesUsed, packMinutes) {
  return minutesUsed <= packMinutes;
}

module.exports = { rateCall, isWithinPack };
