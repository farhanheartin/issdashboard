const refineTextFromPath = (path) => {
  const words = path.replace(/^\//, "").split("/");

  const formattedWords = words.map((word) => {
    const wordsWithSpaces = word.replace(/([a-z])([A-Z])/g, "$1 $2");
    return wordsWithSpaces.charAt(0).toUpperCase() + wordsWithSpaces.slice(1);
  });

  return formattedWords.join(" - ");
};

export default refineTextFromPath;
