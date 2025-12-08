# Cinema 21 - 영화 리뷰 플랫폼

씨네 21 프로토타입 프로젝트입니다. React와 Node.js를 사용한 풀스택 영화 리뷰 웹 애플리케이션입니다.

## 기술 스택

### 백엔드
- **Node.js** + **Express**: RESTful API 서버
- **MariaDB**: 데이터베이스
- **JWT**: 인증/인가
- **bcrypt**: 비밀번호 암호화
- **Axios**: TMDb API 연동

### 프론트엔드
- **React**: UI 라이브러리
- **React Router**: 라우팅
- **Axios**: HTTP 클라이언트
- **Context API**: 상태 관리

### 외부 API
- **TMDb API**: 영화 데이터 및 예고편

## 주요 기능

1. **회원가입/로그인**: JWT 기반 인증 시스템
2. **영화 목록**: TMDb API를 통한 인기 영화 및 최고 평점 영화 표시
3. **영화 상세 정보**: 영화 정보, 예고편, 줄거리 표시
4. **카드 호버 기능**: 마우스를 5초간 올리면 카운트다운 후 상세 페이지로 자동 이동
5. **리뷰/별점**: 로그인한 사용자의 영화 리뷰 및 별점 작성
6. **반응형 디자인**: 모바일, 태블릿, 데스크톱 지원

## 설치 및 실행 방법

### 사전 요구사항

다음 프로그램들이 설치되어 있어야 합니다:

1. **Node.js** (v14 이상) - https://nodejs.org/
2. **npm** (Node.js와 함께 설치됨)
3. **MariaDB** (v10.5 이상) - https://mariadb.org/download/
4. **HeidiSQL** (선택사항, DB 관리용) - https://www.heidisql.com/download.php

### 1. 데이터베이스 설정

MariaDB를 설치하고 실행한 후:

```bash
# MariaDB에 접속
mysql -u root -p

# SQL 파일을 이용해 데이터베이스 및 테이블 생성
source backend/config/initDatabase.sql
```

또는 HeidiSQL을 사용하여 `backend/config/initDatabase.sql` 파일을 실행하세요.

### 2. 백엔드 설정 및 실행

```bash
# backend 폴더로 이동
cd backend

# 패키지 설치
npm install

# .env 파일 생성 (.env.example을 복사)
copy .env.example .env

# .env 파일을 열어 다음 정보를 입력:
# - DB_PASSWORD: MariaDB 비밀번호
# - JWT_SECRET: 랜덤한 문자열 (예: my_super_secret_key_12345)
# - TMDB_API_KEY: TMDb API 키 (아래 참조)

# 서버 실행
npm start

# 또는 개발 모드 (nodemon 사용)
npm run dev
```

서버가 `http://localhost:5000`에서 실행됩니다.

### 3. 프론트엔드 설정 및 실행

새 터미널을 열고:

```bash
# frontend 폴더로 이동
cd frontend

# 패키지 설치
npm install

# 개발 서버 실행
npm start
```

브라우저가 자동으로 열리며 `http://localhost:3000`에서 앱이 실행됩니다.

## TMDb API 키 발급 방법

1. https://www.themoviedb.org/ 접속
2. 회원가입 및 로그인
3. 프로필 → Settings → API 메뉴로 이동
4. API 키 발급 신청 (무료)
5. 발급받은 API 키를 `backend/.env` 파일의 `TMDB_API_KEY`에 입력

## 필수 npm 패키지 목록

### 백엔드 (backend)
```bash
npm install express mysql2 cors dotenv bcrypt jsonwebtoken axios
npm install --save-dev nodemon
```

### 프론트엔드 (frontend)
```bash
npm install react react-dom react-router-dom axios react-scripts
```

## 프로젝트 구조

```
cinema-project/
├── backend/
│   ├── config/
│   │   ├── database.js          # DB 연결 설정
│   │   └── initDatabase.sql     # DB 초기화 SQL
│   ├── middleware/
│   │   └── auth.js              # JWT 인증 미들웨어
│   ├── models/
│   │   ├── User.js              # 사용자 모델
│   │   └── Review.js            # 리뷰 모델
│   ├── routes/
│   │   ├── users.js             # 사용자 라우트 (회원가입/로그인)
│   │   ├── reviews.js           # 리뷰 라우트
│   │   └── movies.js            # 영화 라우트 (TMDb API)
│   ├── .env.example             # 환경변수 예시
│   ├── server.js                # Express 서버
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js        # 네비게이션 바
│   │   │   ├── Navbar.css
│   │   │   ├── MovieCard.js     # 영화 카드 (5초 카운트다운 포함)
│   │   │   └── MovieCard.css
│   │   ├── context/
│   │   │   └── AuthContext.js   # 인증 Context
│   │   ├── pages/
│   │   │   ├── Home.js          # 홈 페이지
│   │   │   ├── Home.css
│   │   │   ├── Popular.js       # 인기 영화 페이지
│   │   │   ├── MovieDetail.js   # 영화 상세 페이지
│   │   │   ├── MovieDetail.css
│   │   │   ├── Login.js         # 로그인 페이지
│   │   │   ├── Signup.js        # 회원가입 페이지
│   │   │   ├── Auth.css
│   │   │   ├── Articles.js      # 기사 페이지
│   │   │   └── Articles.css
│   │   ├── services/
│   │   │   └── api.js           # API 호출 함수
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
└── README.md
```

## API 엔드포인트

### 사용자 관련
- `POST /api/users/signup` - 회원가입
- `POST /api/users/login` - 로그인

### 영화 관련
- `GET /api/movies/popular?page=1` - 인기 영화 목록
- `GET /api/movies/top-rated?page=1` - 최고 평점 영화 목록
- `GET /api/movies/:movieId` - 영화 상세 정보
- `GET /api/movies/search?query=검색어` - 영화 검색

### 리뷰 관련
- `POST /api/reviews` - 리뷰 작성 (인증 필요)
- `GET /api/reviews/:movieId` - 특정 영화의 리뷰 조회
- `DELETE /api/reviews/:reviewId` - 리뷰 삭제 (인증 필요)

## 특별 기능: 5초 카운트다운

영화 카드에 마우스를 올리면:
1. 5초 카운트다운이 시작됩니다 (5, 4, 3, 2, 1)
2. 5초가 지나면 자동으로 영화 상세 페이지로 이동합니다
3. 마우스를 카드에서 벗어나면 카운트다운이 취소됩니다
4. 카드를 클릭하면 즉시 상세 페이지로 이동합니다

## 문제 해결

### 포트가 이미 사용 중인 경우
- 백엔드: `backend/.env`에서 `PORT` 변경
- 프론트엔드: 다른 포트로 자동 실행되도록 안내됨

### MariaDB 연결 오류
1. MariaDB 서비스가 실행 중인지 확인
2. `.env` 파일의 DB 정보가 정확한지 확인
3. 방화벽 설정 확인

### CORS 오류
- 백엔드 `server.js`에 CORS 설정이 포함되어 있습니다
- 필요시 특정 도메인만 허용하도록 수정 가능

## 라이선스

이 프로젝트는 교육 목적으로 제작되었습니다.

## 기여

프로젝트 개선을 위한 Pull Request를 환영합니다!
