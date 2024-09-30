/*
Question 1
Please write code containing at least one main function/method called ​sum_deep​ that receives one array that its structure like a tree and one character. The function/method will return a positive integer​ of sum of node level which any nodes contain the second parameter. Level of the root node is 1. Assump the parameter never empty (array always at least have one node as root node and the second parameter always one character) and the height of the tree is finite. 
*/

const sumDeep = (arr, char, level = 1) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }

  let sum = 0;

  if (typeof arr[0] === "string" && arr[0].includes(char)) {
    sum += level;
  }

  for (let i = 1; i < arr.length; i++) {
    sum += sumDeep(arr[i], char, level + 1);
  }

  return sum;
};

const result = sumDeep(["Y", "Y"], "Y");

console.log(result);

/*
Question 2
Please write code containing at least one main function/method called ​get_scheme​that
receives a string containing simple HTML tags like ​<div>, ​​<b> ​, ​<i> ​, ​<u> ​with attributes . Any attribute that contains scheme prefix ​sc-​​ is tag with scheme. The function/method will return an array that contain of scheme name. Assump the HTML tags are always have correct open and close tag and have no branch.
*/

const getScheme = (rawHtml) => {
  return rawHtml
    .split("<")
    .filter((str) => str.includes("sc-"))
    .map((str) => str.split("sc-")[1].split(" ")[0].split(">")[0]);
};

const result2 = getScheme(
  "<div sc-root><div sc-subroot title='Oh My'>Hello<i sc-hello>World</i><i sc-hello2>Hello</i></div></div>"
);

console.log(result2);

/*
Question 3
Please write code containing at least one main function/method called ​pattern_count​that receives two strings or two array of characters with length between 0 and 100 characters. First parameter is the text and second parameter is the pattern. This function will return a number how many pattern is inside the text. Assume the input parameters are always not null. Your solution must not use any predefined helper function like ​substr_count​in PHP or regex match length in JavaScript. 
*/

const containWords = (text, pattern) => {
  const textLength = text.length;
  const patternLength = pattern.length;

  if (patternLength === 0 || patternLength > textLength) {
    return 0;
  }

  let count = 0;

  for (let i = 0; i <= textLength - patternLength; i++) {
    let match = true;
    for (let j = 0; j < patternLength; j++) {
      if (text[i + j] !== pattern[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      count++;
    }
  }

  return count;
};

console.log(containWords("ababab", "aba"));
