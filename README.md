# DURCIT 관리자 페이지

이 프로젝트는 Reddit과 같은 DURCIT SNS 프로젝트를 관리하기 위한 관리자 대시보드입니다. 프론트엔드는 **React**와 **TailwindCSS**로 구축되었으며, 백엔드는 **Java**와 **Spring**으로 개발 중입니다.

---

## **기능**

- **인증**: 관리자 ID와 비밀번호를 통한 로그인.
- **대시보드**: 사용자 통계, 게시물 및 신고 내역 확인.
- **사용자 관리**: 사용자 CRUD 작업.
- **게시물 관리**: 게시물 및 신고된 콘텐츠 관리.

---

## **시작하기**

### **필수 조건**

다음이 설치되어 있어야 합니다:

- [Node.js](https://nodejs.org/) (v18 이상)
- npm (v9 이상)

---

### **설치 방법**

1. 레포지토리를 클론합니다:
   ```bash
   git clone https://github.com/your-repository/durcit-admin.git
   ```

2. 프로젝트 디렉토리로 이동:
   ```bash
   cd durcit-admin
   ```

3. 의존성을 설치:
   ```bash
   npm install
   ```

4. 개발 서버 시작:
   ```bash
   npm start
   ```

앱은 `http://localhost:3000`에서 확인할 수 있습니다.

---

## **프로젝트 구조**

```plaintext
src/
├── components/           # 재사용 가능한 UI 컴포넌트
├── pages/                # 페이지 단위 컴포넌트
├── context/              # 전역 상태를 위한 Context API
├── services/             # API 서비스 함수
├── App.js                # 메인 애플리케이션 컴포넌트
├── index.js              # React 진입점
├── index.css             # 전역 CSS 및 Tailwind 설정
├── tailwind.config.js    # Tailwind 설정 파일
```

---

## **스크립트**

- `npm start`: 개발 서버를 시작합니다.
- `npm run build`: 프로덕션 빌드를 생성합니다.

---

## **사용된 기술**

### **프론트엔드**
- React (v18.2)
- TailwindCSS (v3.4)
- Axios (v1.7)
- React Router DOM (v7.0)

### **백엔드**
- Java & Spring (백엔드 팀 개발 중)

---

## **문의**

추가 문의 사항이 있으면 아래로 연락해주세요:

- 프로젝트 담당자: **Your Name**
- 이메일: **your.email@example.com**

