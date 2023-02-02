const arrayToText = (ingredients: string[]) => {
  if (document.documentElement.clientWidth < 640) {
    return `${ingredients.join(", ").substring(0, 40)}...`;
  }
  return `${ingredients.join(", ").substring(0, 60)}...`;
};

export default arrayToText;
