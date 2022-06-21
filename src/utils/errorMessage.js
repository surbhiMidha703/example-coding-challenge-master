const errorMessage = (res) => {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res;
};

export default errorMessage;
