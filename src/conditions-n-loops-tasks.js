/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b >= max) {
    max = b;
    return c >= max ? c : max;
  }

  return c >= max ? c : max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;
  for (let i = 1; i < 8; i += 1) {
    if (queen.x === king.x + i && queen.y === king.y + i) return true;
    if (queen.x === king.x - i && queen.y === king.y - i) return true;
    if (queen.x === king.x - i && queen.y === king.y + i) return true;
    if (queen.x === king.x + i && queen.y === king.y - i) return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  return !!(
    ((a === b && a + b > c) ||
      (b === c && b + c > a) ||
      (c === a && c + a > b)) &&
    a !== 0 &&
    b !== 0 &&
    c !== 0
  );
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const firstDigit = Math.trunc(num / 10);
  const secondDigit = num % 10;
  let char1 = null;
  let char2 = null;
  switch (firstDigit) {
    case 0:
      char1 = '';
      break;
    case 1:
      char1 = 'X';
      break;
    case 2:
      char1 = 'XX';
      break;
    case 3:
      char1 = 'XXX';
      break;
    default:
      break;
  }
  switch (secondDigit) {
    case 0:
      char2 = '';
      break;
    case 1:
      char2 = 'I';
      break;
    case 2:
      char2 = 'II';
      break;
    case 3:
      char2 = 'III';
      break;
    case 4:
      char2 = 'IV';
      break;
    case 5:
      char2 = 'V';
      break;
    case 6:
      char2 = 'VI';
      break;
    case 7:
      char2 = 'VII';
      break;
    case 8:
      char2 = 'VIII';
      break;
    case 9:
      char2 = 'IX';
      break;
    default:
      break;
  }

  return `${char1}${char2}`;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let char = null;
  let strWordsNumber = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    const digit = numberStr[i];

    switch (digit) {
      case '0':
        char = 'zero';
        break;
      case '1':
        char = 'one';
        break;
      case '2':
        char = 'two';
        break;
      case '3':
        char = 'three';
        break;
      case '4':
        char = 'four';
        break;
      case '5':
        char = 'five';
        break;
      case '6':
        char = 'six';
        break;
      case '7':
        char = 'seven';
        break;
      case '8':
        char = 'eight';
        break;
      case '9':
        char = 'nine';
        break;
      case '.':
        char = 'point';
        break;
      case ',':
        char = 'point';
        break;
      case '-':
        char = 'minus';
        break;
      default:
        break;
    }

    strWordsNumber += i === 0 ? `${char}` : ` ${char}`;
  }

  return strWordsNumber;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let remainder;
  let number = num;
  while (number > 0) {
    remainder = number % 10;
    if (remainder === digit) return true;
    number = Math.trunc(number / 10);
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    let leftSum = 0;
    for (let j = i - 1; j >= 0; j -= 1) {
      leftSum += arr[j];
    }
    let rightSum = 0;
    for (let k = i + 1; k < arr.length; k += 1) {
      rightSum += arr[k];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = new Array(size);
  let acc = 1;
  let startRow = 0;
  let endRow = size;
  let startCol = 0;
  let endCol = size;

  for (let i = 0; i < size; i += 1) {
    arr[i] = new Array(size);
  }

  while (startRow < endRow && startCol < endCol) {
    for (let i = startCol; i < endCol; i += 1) {
      arr[startRow][i] = acc;
      acc += 1;
    }
    startRow += 1;
    for (let i = startRow; i < endRow; i += 1) {
      arr[i][endCol - 1] = acc;
      acc += 1;
    }
    endCol -= 1;
    if (startRow < endRow) {
      for (let i = endCol - 1; i >= startCol; i -= 1) {
        arr[endRow - 1][i] = acc;
        acc += 1;
      }
      endRow -= 1;
    }
    if (startCol < endCol) {
      for (let i = endRow - 1; i >= startRow; i -= 1) {
        arr[i][startCol] = acc;
        acc += 1;
      }
      startCol += 1;
    }
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const arr = [...matrix];
  const dbl = matrix;
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < n; i += 1) {
    const tmp = new Array(n);
    let ind = 0;
    for (let j = m - 1; j >= 0; j -= 1) {
      tmp[ind] = arr[j][i];
      ind += 1;
    }
    dbl[i] = tmp;
  }
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const List = arr;
  const pivot = List[List.length - 1];
  const leftList = [];
  const rightList = [];
  const mid = [];
  mid[0] = pivot;
  let n = 0;
  let m = 0;
  let k = 1;

  for (let i = 0; i < List.length - 1; i += 1) {
    if (List[i] === pivot) {
      mid[k] = List[i];
      k += 1;
    }
    if (List[i] < pivot) {
      leftList[n] = List[i];
      n += 1;
    }
    if (List[i] > pivot) {
      rightList[m] = List[i];
      m += 1;
    }
  }

  const sortedList = [...sortByAsc(leftList), ...mid, ...sortByAsc(rightList)];

  for (let i = 0; i < sortedList.length; i += 1) {
    List[i] = sortedList[i];
  }

  return List;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  if (iterations === 0) return str;

  const strCopy = str;
  let count = 0;

  function getShuffledStr(strNew) {
    const arrStart = [];
    const arrEnd = [];
    let n = 0;
    let m = 0;

    for (let i = 0; i < strNew.length; i += 1) {
      if (i % 2 !== 0) {
        arrEnd[m] = strNew[i];
        m += 1;
      } else {
        arrStart[n] = strNew[i];
        n += 1;
      }
    }

    let result = '';
    for (let i = 0; i < arrStart.length; i += 1) {
      result += arrStart[i];
    }
    for (let i = 0; i < arrEnd.length; i += 1) {
      result += arrEnd[i];
    }

    return result;
  }

  function getShuffleCount(strNew, iterNew) {
    if (strNew === strCopy) {
      return count;
    }
    if (iterNew < 1) {
      return count;
    }

    const shuffledStr = getShuffledStr(strNew);
    count += 1;

    return getShuffleCount(shuffledStr, iterNew - 1);
  }

  let strShuffled = getShuffledStr(strCopy);
  count += 1;
  if (iterations === 1) return strShuffled;

  getShuffleCount(strShuffled, strShuffled.length - 1);

  const numberOfShuffle = iterations % count;

  for (let i = 2; i <= numberOfShuffle; i += 1) {
    strShuffled = getShuffledStr(strShuffled);
  }

  return strShuffled;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let strNum = '';
  strNum += number;
  const arrNum = [...strNum];
  let ind;

  for (ind = arrNum.length - 1; ind >= 0; ind -= 1) {
    if (arrNum[ind] > arrNum[ind - 1]) {
      break;
    }
  }

  if (ind === 1 && arrNum[ind] <= arrNum[ind - 1]) {
    return number;
  }

  const prev = arrNum[ind - 1];
  let smallest = ind;

  for (let j = ind + 1; j < arrNum.length; j += 1) {
    if (arrNum[j] > prev && arrNum[j] < arrNum[smallest]) smallest = j;
  }

  const temp = arrNum[smallest];
  arrNum[smallest] = arrNum[ind - 1];
  arrNum[ind - 1] = temp;
  let accumNum = 0;

  for (let j = 0; j < ind; j += 1) {
    accumNum = accumNum * 10 + +arrNum[j];
  }

  function qsort(array) {
    const List = array;

    if (List.length <= 1) {
      return List;
    }

    const pivot = List[List.length - 1];
    const leftList = [];
    const rightList = [];
    const mid = [];
    mid[0] = pivot;
    let n = 0;
    let m = 0;
    let k = 1;

    for (let i = 0; i < List.length - 1; i += 1) {
      if (List[i] === pivot) {
        mid[k] = List[i];
        k += 1;
      }
      if (List[i] < pivot) {
        leftList[n] = List[i];
        n += 1;
      }
      if (List[i] > pivot) {
        rightList[m] = List[i];
        m += 1;
      }
    }

    return [...sortByAsc(leftList), ...mid, ...sortByAsc(rightList)];
  }

  const arrTail = [];
  let index = 0;

  for (let j = ind; j < arrNum.length; j += 1) {
    arrTail[index] = arrNum[j];
    index += 1;
  }

  const arrSortedTail = qsort(arrTail);

  for (let j = 0; j < arrSortedTail.length; j += 1) {
    accumNum = accumNum * 10 + +arrSortedTail[j];
  }

  return accumNum;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
