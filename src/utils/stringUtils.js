/**
 * 문자열을 카멜케이스로 변환
 * @param {string} str - 변환할 문자열
 * @returns {string} 카멜케이스로 변환된 문자열
 */
function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

/**
 * 문자열을 스네이크케이스로 변환
 * @param {string} str - 변환할 문자열
 * @returns {string} 스네이크케이스로 변환된 문자열
 */
function toSnakeCase(str) {
  return str
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '');
}

/**
 * 문자열을 케밥케이스로 변환
 * @param {string} str - 변환할 문자열
 * @returns {string} 케밥케이스로 변환된 문자열
 */
function toKebabCase(str) {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}

/**
 * 문자열의 첫 글자를 대문자로 변환
 * @param {string} str - 변환할 문자열
 * @returns {string} 첫 글자가 대문자인 문자열
 */
function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 문자열을 역순으로 변환
 * @param {string} str - 변환할 문자열
 * @returns {string} 역순으로 변환된 문자열
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

module.exports = {
  toCamelCase,
  toSnakeCase,
  toKebabCase,
  capitalize,
  reverseString
};
