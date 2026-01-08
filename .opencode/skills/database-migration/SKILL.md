---
name: database-migration
description: 데이터베이스 마이그레이션 및 스키마 변경 관리
license: MIT
compatibility: opencode
metadata:
  audience: backend-developers
  database: sql
---

## 내가 하는 일
- 안전한 데이터베이스 마이그레이션 스크립트 작성
- 스키마 변경의 역행 가능성 보장
- 데이터 손실 없는 마이그레이션 전략 수립
- 롤백 계획 제공

## 언제 사용하세요
- 데이터베이스 테이블/컬럼 추가/삭제/수정 시
- 인덱스 생성/삭제 시
- 데이터 타입 변경 시
- 대량 데이터 마이그레이션 시

## 마이그레이션 원칙
1. **원자적**: 각 마이그레이션은 완전히 독립적으로 실행 가능해야 함
2. **역행 가능**: 항상 down migration 제공
3. **안전**: 프로덕션 데이터를 보호
4. **테스트 가능**: 스테이징 환경에서 먼저 테스트

## 마이그레이션 스크립트 템플릿
```sql
-- Up: 스키마 변경 적용
ALTER TABLE users ADD COLUMN email VARCHAR(255) UNIQUE;

-- Down: 스키마 변경 롤백
ALTER TABLE users DROP COLUMN email;
```

## 주의사항
- 대형 테이블의 인덱스 생성은 서비스 중단 최소화 방안 고려
- 데이터 타입 변경은 데이터 손실 위험 확인
- 마이그레이션 실행 전 반드시 백업