const colorizePrice = (a, b) => {
  if (a < b) {
    return "cheap";
  } else if (b === undefined) {
    return "cheap";
  } else {
    return "expensive";
  }
};

export default colorizePrice;
