---
name: pr-example-runner
description: PR_EXAMPLES.md 파일을 기반으로 실제 PR 생성 워크플로우 자동화
license: MIT
compatibility: opencode
metadata:
  requires: git, gh-cli
  difficulty: intermediate
  examples: ["string-utils", "api-endpoints"]
---

## 내가 하는 일

PR_EXAMPLES.md 파일에 정의된 예제를 실제로 실행하여 완전한 PR 생성 워크플로우를 수행합니다:

1. **브랜치 생성**: 적절한 브랜치 이름으로 새 브랜치 생성
2. **파일 생성**: 예제 코드를 실제 파일로 생성
3. **테스트 파일 생성**: 관련 테스트 파일 자동 생성
4. **커밋**: Conventional Commits 규칙에 맞는 커밋 메시지 작성
5. **푸시**: 원격 저장소에 브랜치 푸시
6. **PR 생성**: gh CLI를 사용하여 PR 자동 생성
7. **검증**: 각 단계별 에러 핸들링 및 검증

## 언제 사용하세요

- **학습 목적**: PR 생성 워크플로우 이해 및 실습
- **예제 실행**: PR_EXAMPLES.md의 예제를 실제로 실행해 보고 싶을 때
- **테스트 환경**: 안전한 테스트 환경에서 Git 워크플로우 연습
- **자동화 테스트**: CI/CD 파이프라인 테스트용 PR 생성
- **데모/교육**: Git 및 PR 사용법 교육용 예제 생성

## 지원하는 예제

### 예제 1: 문자열 유틸리티 함수 추가
- 브랜치: `feature/string-utils`
- 파일: `src/utils/stringUtils.js`, `src/utils/stringUtils.test.js`
- 함수: `toCamelCase`, `toSnakeCase`, `toKebabCase`, `capitalize`, `reverseString`

### 예제 2: API 엔드포인트 추가
- 브랜치: `feature/api-endpoints`
- 파일: `src/api/users.js`
- 함수: `getAllUsers`, `getUserById`, `createUser`, `updateUser`, `deleteUser`

## 실행 단계

### 1단계: 사전 검증
```bash
# 깃 저장소 확인
git remote -v

# gh CLI 설치 확인
gh --version

# 현재 브랜치 확인
git branch
```

### 2단계: 브랜치 생성
```bash
# 새 브랜치 생성 및 체크아웃
git checkout -b <branch-name>
```

### 3단계: 파일 생성
```bash
# src 디렉토리가 없는 경우 생성
mkdir -p src/utils
mkdir -p src/api

# 예제 코드 파일 생성
# (예제에 따른 코드 작성)
```

### 4단계: 커밋
```bash
git add .
git commit -m "feat: <한 줄 요약>

- <상세 설명>
- <추가 정보"
```

### 5단계: 푸시
```bash
git push origin <branch-name>
```

### 6단계: PR 생성
```bash
# gh CLI를 통한 PR 생성
gh pr create --title "<PR 제목>" --body "<PR 설명>"
```

## 커밋 메시지 규칙 (Conventional Commits)

### 형식
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type
- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 스타일 변경 (포맷팅 등)
- `refactor`: 리팩토링
- `test`: 테스트 추가/수정
- `chore`: 빌드/도구 변경

### 예시
```
feat(utils): 문자열 변환 함수 추가

카멜케이스, 스네이크케이스, 케밥케이스 변환 함수를 추가했습니다.

Closes #123
```

## PR 템플릿

### 제목
```
feat: <한 줄로 변경사항 요약>
```

### 본문
```
## 요약
<2-3문장으로 변경사항 요약>

## 변경 내용
- <변경 사항 1>
- <변경 사항 2>
- <변경 사항 3>

## 추가된 함수/API
- `<함수/API 이름>`: <설명>

## 테스트 방법
\`\`\`bash
<테스트 실행 명령>
\`\`\`

## 변경 유형
- ✨ 새로운 기능
- 🐛 버그 수정
- 📝 문서 변경
- ♻️  리팩토링

## 체크리스트
- [x] 코드 작성 완료
- [x] 테스트 작성 완료
- [x] 커밋 메시지 규칙 준수
- [ ] CI/CD 파이프라인 통과
- [ ] 문서 업데이트
```

## 에러 핸들링

### 에러 1: 이미 브랜치가 존재함
```bash
# 해결: 기존 브랜치 삭제 후 재생성
git branch -D <branch-name>
git checkout -b <branch-name>
```

### 에러 2: gh CLI 인증 필요
```bash
# 해결: gh CLI 인증
gh auth login
```

### 에러 3: 원격 저장소에 푸시 실패
```bash
# 해결: 원격 저장소 추가
git remote add origin <repository-url>
git push origin <branch-name>
```

### 에러 4: 커밋 실패 (변경사항 없음)
```bash
# 해결: 파일 생성 여부 확인
git status
ls -la src/
```

## 체크리스트

실행 전 확인:
- [ ] 깃 저장소 초기화 완료
- [ ] 원격 저장소 연결 완료
- [ ] gh CLI 설치 및 인증 완료
- [ ] 적절한 브랜치에서 작업 (main/develop)

실행 후 확인:
- [ ] 브랜치 생성 완료
- [ ] 모든 파일 생성 완료
- [ ] 커밋 메시지 규칙 준수
- [ ] 원격 저장소 푸시 완료
- [ ] PR 생성 완료
- [ ] 테스트 실행 성공

## 주의사항

1. **안전한 환경에서 실행**: 테스트 목적이므로 별도의 테스트 저장소 사용 권장
2. **브랜치 확인**: main/develop 브랜치에서 직접 작업하지 않도록 주의
3. **커밋 메시지**: Conventional Commits 규칙 준수
4. **테스트**: 푸시 전 로컬에서 테스트 실행
5. **중복 방지**: 이미 존재하는 브랜치가 있는지 확인

## 확장 가능성

이 skill은 다음과 같이 확장할 수 있습니다:

1. **자동화 스크립트**: 전체 워크플로우를 하나의 스크립트로 자동화
2. **CI/CD 통합**: 자동으로 테스트 실행 및 검증
3. **다양한 예제 지원**: 더 많은 예제 추가
4. **커스텀 템플릿**: 프로젝트별 맞춤형 PR 템플릿
5. **검증 도구**: 코드 리뷰 자동화, 린트 실행 자동화

## 관련 문서

- [PR_EXAMPLES.md](./PR_EXAMPLES.md): 예제 코드 상세 내용
- [git-workflow skill](./git-workflow/SKILL.md): Git 브랜칭 전략
- [GitHub CLI 문서](https://cli.github.com/manual/)
- [Conventional Commits](https://www.conventionalcommits.org/)
