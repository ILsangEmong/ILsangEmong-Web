# **Team ILsangEmong**

일상이몽 - 함께 경험한 하나의 일상을 서로 다른 시각으로 회상하는 서비스

## **THE SOPT Sopkathon - Group 4**

### **🛠Used stack & library**
#### ** Used stack **
```
react, typescript, CRA
```
#### ** Used library **
```
axios, react-router-dom, recoil, styled-components, styled-reset

```

### **🧷directory structure**

```
.
├── public
└── src
    ├── components
    ├── pages
    ├── services
    │   ├── api
    │   │   └── types
    │   ├── mock
    │   └── remote
    ├── stores
    └── styles
```

### **🧑‍💻 Developers**
|남주영|주송아|최세영|
|------|---|---|
|어~?라는 말 금지(나)|낼 아침 국밥갈겨(소주콸콸콸)|잘 하고(쌉가능) 잘 마시자(안되겠지..)|


### **💼 Roles**
|남주영|주송아|최세영|
|------|---|---|
|글 작성뷰(CommentForm), 팀 생성뷰(TeamForm), 그룹참여뷰(GroupMain)|만료뷰(Expire), 결과입장뷰(ResultIntro), 결과 모달 컴포넌트(shareModal)|결과 뷰(Result)|

### **📏 Code Convention**

- **컴포넌트 선언**

최상위는 function, 아래 함수는 const!

`function Component() {`

`const handleaaaa = () => {`

`}`

`}`

- **핸들러 함수**

기능 기준으로 쓰되 (`modalOpen` 등),

정말 이 함수가 하는 일이 특정 이벤트 전용이라면 `handle[이벤트당한요소][이벤트]` (`handleInputChange` 등)

- **컴포넌트 이름**

1. `buttonSearch`
2. `searchButton`
3. `btnSearch`
4. `searchBtn`

- **style 붙인 거**

스타일만을 위해서 만든 컴포넌트는 styled를 붙이자

❌ `StyledDiv`

`StyledTitle`

`StyledWrapper`

`StyledImage`

- **export , import**

export한 친구의 이름 바꿔서 쓰지 말기!

안 그래도 되도록 변수/함수 이름은 자세하게 쓰기

### 👨‍💻팀 협업 룰

1. 메인에 머지할 때 무조건 다같이 하기
2. 졸리면 웃음벨 치기
3. 10분 이상 고민하는 경우 `도움` 요청하기

### **🌿 Branch Strategy**

- git flow 기반
- 이슈를 기능 단위로 파고, 그 이슈 단위로 브랜치 파서 기능 개발 후 main에 merge

`ex. 브랜치명 feat/#이슈번호`

### **📌 Commit Convention**

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8394124a-ed99-4168-9c06-48b9109dab2d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220521T131626Z&X-Amz-Expires=86400&X-Amz-Signature=5e8d736934b030772793d50a67031f104f3538369025db8a6201f77ff4c15cd5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject">

###
