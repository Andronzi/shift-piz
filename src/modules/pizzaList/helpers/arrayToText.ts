const arrayToText = (ingredients: string[]) => {
    return ingredients.join(", ").substring(0, 60) + "..."
}

export default arrayToText;