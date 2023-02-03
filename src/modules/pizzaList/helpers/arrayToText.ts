const arrayToTextWithSlice = (ingredients: string[]) => {
  if (document.documentElement.clientWidth < 640) {
    return `${ingredients.join(", ").substring(0, 40)}...`;
  }
  return `${ingredients.join(", ").substring(0, 60)}...`;
};

const arrayToText = (ingredients: string[]) =>
  `${
    ingredients.join(", ").charAt(0).toUpperCase() +
    ingredients.join(", ").slice(1)
  }`;

export { arrayToText, arrayToTextWithSlice };

