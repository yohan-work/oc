---
name: api-design
description: REST API 설계 및 문서화 가이드
license: MIT
compatibility: opencode
---

## 내가 하는 일
- RESTful API 엔드포인트 설계 제안
- 적절한 HTTP 메서드 및 상태 코드 선택
- API 응답 구조 표준화
- API 문서 작성 (OpenAPI/Swagger)

## 언제 사용하세요
- 새로운 API 엔드포인트 설계 필요 시
- 기존 API 개선 요청 시
- API 문서화 필요 시
- API 버저닝 전략 수립 시

## 설계 원칙
1. **자원 기반**: URL은 자원을 나타냄 (명사 사용)
2. **HTTP 메서드 적절 사용**:
   - GET: 자원 조회
   - POST: 자원 생성
   - PUT/PATCH: 자원 수정
   - DELETE: 자원 삭제
3. **상태 코드**:
   - 2xx: 성공 (200 OK, 201 Created, 204 No Content)
   - 4xx: 클라이언트 오류 (400 Bad Request, 404 Not Found)
   - 5xx: 서버 오류 (500 Internal Server Error)

## 응답 구조 템플릿
```json
{
  "data": { ... },
  "meta": {
    "page": 1,
    "total": 100
  },
  "errors": []
}
```