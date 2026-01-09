const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('./users');

console.log('=== 사용자 API 테스트 ===');

console.log('\n[모든 사용자 조회]');
console.log('사용자 목록:', getAllUsers());

console.log('\n[ID로 사용자 조회]');
console.log('ID 1:', getUserById(1));
console.log('ID 2:', getUserById(2));
console.log('ID 999:', getUserById(999));

console.log('\n[사용자 생성]');
const newUser = createUser({ name: '박지성', email: 'park@example.com' });
console.log('생성된 사용자:', newUser);
console.log('전체 목록:', getAllUsers());

console.log('\n[사용자 업데이트]');
const updatedUser = updateUser(1, { name: '홍길동(수정)' });
console.log('업데이트된 사용자:', updatedUser);
console.log('ID 1 조회:', getUserById(1));

console.log('\n[사용자 삭제]');
console.log('삭제 전 목록:', getAllUsers());
const deleted = deleteUser(3);
console.log('삭제 결과:', deleted);
console.log('삭제 후 목록:', getAllUsers());

console.log('\n✅ 모든 테스트 완료!');
