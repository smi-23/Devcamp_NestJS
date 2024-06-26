### 디렉토리 구조 📂

```plaintext
src/auth
├── auth.module.ts
├── controllers
├── dto
├── entities
├── repositories
└── services
src/payment
├── payment.module.ts
├── controllers
├── dto
├── entities
├── repositories
└── services
src/common
src/exception
```

## 구현범위 🚀

- **auth(to-do):** 회원가입/로그인 및 JWT 인증을 담당하는 모듈입니다.
- **payment(to-do):** 주문 및 결제 처리를 담당하는 모듈입니다. 장바구니, 배송, 포인트/쿠폰 시스템을 담고 있습니다.

## Auth 서비스 🔐

Auth 서비스는 사용자의 인증과 권한 관리를 담당하는 중요한 모듈입니다. 이 모듈은 JWT를 활용한 인증, 액세스 및 리프레시 토큰 관리, 토큰 블랙리스트 처리, 접속 로그 기록 등의 기능을 제공합니다.

### 주요 기능 🚀
1. **로그인 (login)**
   - 사용자 검증: 이메일과 비밀번호를 통해 사용자를 검증합니다. 
   - 토큰 생성: 검증된 사용자에 대해 액세스 및 리프레시 토큰을 생성합니다. 
   - 접속 로그 저장: 사용자의 접속 정보를 로그로 저장합니다.
2. **토큰 갱신 (refreshAccessToken)**
   - 리프레시 토큰 검증: 제공된 리프레시 토큰을 검증하고 유효한 경우 새로운 액세스 토큰을 발급합니다.
3. **로그아웃 (logout)**
   - 토큰 블랙리스트: 로그아웃 시 사용자의 현재 토큰을 블랙리스트에 추가하여 더 이상 사용할 수 없게 합니다. 
4. **토큰 블랙리스트 관리**
   - 토큰 블랙리스트에 추가 및 조회: 특정 토큰을 블랙리스트에 추가하거나 조회하는 기능을 제공합니다.

### 보안 및 최적화 🛡️
- **argon2**: 비밀번호 해싱에 argon2 알고리즘을 사용하여 보안을 강화합니다.
- **JWT 블랙리스트**: 로그아웃 또는 다른 이유로 무효화된 토큰을 관리하여 보안을 더욱 강화합니다.
- **접속 로그**: 사용자의 모든 접속 정보를 로그로 기록하여 추후 분석 및 모니터링에 활용합니다.

## payment 서비스 🔐

Payment 서비스는 사용자의 결제, 쿠폰, 포인트 관리를 담당하는 중요한 모듈입니다. 이 모듈은 JWT를 활용한 인증과 결제 및 사용자의 포인트와 쿠폰을 관리합니다. 

### 주요 기능 🚀
1. **결제 (payment)**
   - 사용자 검증: jwt토큰을 통해 사용자를 검증합니다. 
   - 결제 생성, 완료, 실패: 검증된 사용자에 대해 결제를 진행합니다. 
   - 결제 로그 저장: 사용자의 결제 정보를 로그로 저장합니다.
2. **쿠폰 (coupon)**
   - 유저, 쿠폰과 발급된 쿠폰을 매핑해 통합적으로 관리합니다.
3. **포인트 (point)**
   - 포인트의 사용 및 로그를 관리합니다.
4. **주문 (order)**
   - 주문 및 로그를 관리합니다.
5. **배송 (shipping)**
   - 배송 및 로그를 관리합니다.

### 보안 및 최적화 🛡️
- **argon2**: 비밀번호 해싱에 argon2 알고리즘을 사용하여 보안을 강화합니다.
- **JWT 블랙리스트**: 로그아웃 또는 다른 이유로 무효화된 토큰을 관리하여 보안을 더욱 강화합니다.
- **접속 로그**: 사용자의 모든 접속 정보를 로그로 기록하여 추후 분석 및 모니터링에 활용합니다.
- **결제**: 토스페이먼츠와 연동하여 오더 정보와 결제 정보를 비교해서 다르다면 에러를 출력합니다.

## 기술스택 🛠️

- TypeScript + NestJS + SWC
- Yarn berry + Plug'n'Play + Zero-Install
- TypeORM + PostgreSQL
- Joi
- Jest
