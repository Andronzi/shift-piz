const fontFamily = "font-nunito";
const semibold = "font-semibold";
const bold = "font-bold";

export const classes = {
  cardWrapper:
    "max-w-xs rounded-md tablet:max-w-tablet-card phone:max-w-phone-card",
  image: "w-5/6 px-2 mx-auto",
  infoWrapper: "pt-1",
  name: `${fontFamily} ${semibold} laptop:text-lg max-w-14em tablet:text-md phone:text-sm`,
  ingredients: `${fontFamily} max-w-prose mt-2 laptop:text-sm text-gray-600 tablet:text-xs phone:text-xs`,
  downSticky: "flex mt-4 items-center justify-between",
  price: `${fontFamily} ${bold} text-center laptop:text-lg tablet:text-md phone:text-sm`,
  chooseButton: `${fontFamily} bg-red-400 text-white px-6 py-2 rounded-2xl laptop:text-md tablet:text-sm phone:text-xs phone:px-4 phone:py-1.5`,
};
