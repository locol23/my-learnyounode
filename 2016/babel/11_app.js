var inputs = process.argv.slice(2);
var result = inputs.map((word) => word[0]).reduce((words, word) => words += word);
console.log(result);
