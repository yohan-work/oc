---
name: git-workflow
description: Git 브랜칭 전략 및 PR 워크플로우 관리
license: MIT
compatibility: opencode
---

## 내가 하는 일
- 적절한 Git 브랜칭 전략 제안 (feature, hotfix, release 등)
- Pull Request 생성 가이드 및 템플릿 제공
- 충돌 해결 방법 제시
- 커밋 메시지 규칙 관리

## 언제 사용하세요
- 새로운 기능 개발 시작 전 브랜치 전략 수립
- PR 생성 전 준비사항 확인
- Git 충돌 발생 시 해결 방법 요청
- 커밋 메시지 작성 규칙 확인

## 일반적인 브랜칭 전략
1. **main**: 배포 준비된 코드
2. **develop**: 개발 중인 기능 통합
3. **feature/<기능명>**: 새 기능 개발
4. **hotfix/<버전-픽스>**: 긴급 버그 수정

## PR 생성 체크리스트
- 코드는 충분히 테스트되었나요?
- 문서가 업데이트되었나요?
- CI/CD 파이프라인이 통과했나요?
- 적절한 리뷰어가 할당되었나요?