function stringToSnakeCase (str) {
  const match = str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);

  const map = match.map(x => x.charAt(0).toUpperCase() + x.substr(1).toLowerCase());

  return map.join("_");
}

function stringToCamelCase (str) {
  const match = str
    .match(/[^a-zA-Z0-9]+(.)/g);

  console.log(match);

  // const map = match.map(x => x.charAt(0).toUpperCase() + x.substr(1).toLowerCase());
  //
  // return map.join("_");
}

// console.log(stringToSnakeCase("ashwani-Kumar"));
console.log(stringToCamelCase("ashwani-Kumar"));
