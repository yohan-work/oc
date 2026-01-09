const {
  toCamelCase,
  toSnakeCase,
  toKebabCase,
  capitalize,
  reverseString
} = require('./stringUtils');

console.log('=== 문자열 유틸리티 테스트 ===');

// toCamelCase 테스트
console.log('\n[카멜케이스 변환]');
console.log('hello-world ->', toCamelCase('hello-world')); // helloWorld
console.log('hello world ->', toCamelCase('hello world')); // helloWorld
console.log('hello_world ->', toCamelCase('hello_world')); // helloWorld

// toSnakeCase 테스트
console.log('\n[스네이크케이스 변환]');
console.log('helloWorld ->', toSnakeCase('helloWorld')); // hello_world
console.log('HelloWorld ->', toSnakeCase('HelloWorld')); // hello_world

// toKebabCase 테스트
console.log('\n[케밥케이스 변환]');
console.log('helloWorld ->', toKebabCase('helloWorld')); // hello-world
console.log('HelloWorld ->', toKebabCase('HelloWorld')); // hello-world

// capitalize 테스트
console.log('\n[첫 글자 대문자]');
console.log('hello ->', capitalize('hello')); // Hello
console.log('world ->', capitalize('world')); // World

// reverseString 테스트
console.log('\n[문자열 역순]');
console.log('hello ->', reverseString('hello')); // olleh
console.log('world ->', reverseString('world')); // dlrow

console.log('\n✅ 모든 테스트 완료!');
