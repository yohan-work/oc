/**
 * 사용자 관련 API 엔드포인트
 */

const users = [
  { id: 1, name: '홍길동', email: 'hong@example.com' },
  { id: 2, name: '김철수', email: 'kim@example.com' },
  { id: 3, name: '이영희', email: 'lee@example.com' }
];

/**
 * 모든 사용자 조회
 * @returns {Array} 사용자 목록
 */
function getAllUsers() {
  return users;
}

/**
 * ID로 사용자 조회
 * @param {number} id - 사용자 ID
 * @returns {Object|null} 사용자 정보
 */
function getUserById(id) {
  return users.find(user => user.id === id) || null;
}

/**
 * 사용자 생성
 * @param {Object} userData - 사용자 데이터
 * @returns {Object} 생성된 사용자
 */
function createUser(userData) {
  const newUser = {
    id: users.length + 1,
    ...userData
  };
  users.push(newUser);
  return newUser;
}

/**
 * 사용자 업데이트
 * @param {number} id - 사용자 ID
 * @param {Object} updateData - 업데이트할 데이터
 * @returns {Object|null} 업데이트된 사용자
 */
function updateUser(id, updateData) {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) return null;
  
  users[userIndex] = { ...users[userIndex], ...updateData };
  return users[userIndex];
}

/**
 * 사용자 삭제
 * @param {number} id - 사용자 ID
 * @returns {boolean} 삭제 성공 여부
 */
function deleteUser(id) {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) return false;
  
  users.splice(userIndex, 1);
  return true;
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};