1. make dev.js file inside config folder 
2. put mongoDB info into dev.js file 
3. Type  " npm install " inside the root directory  ( Download Server Dependencies ) 
4. Type " npm install " inside the client directory ( Download Front-end Dependencies )


# Q&A

## CLIENT

- ~~jsx 파일로 만들지않고 js 파일로 만든 이유는?~~ => jsx 로 변환할 수 있지만 디자인 코드를 가져와 사용하기 위해 모든 파일들을 js 로 만듬, 하지만 jsx 로 변경하여 개발한다면 역시 어렵지않게 할 수 있음

- ~~_actions, _reducers 앞에 underscore 를 붙인 이유는?~~ => 다른 컴포넌트와 구분짓기위한 prefix 로 `_` 를 붙임

- ~~프론트 구현할 때 사용한 추가 패키지 설명~~ => antd, Formik, Yup 패키지 모두 부트스트랩 디자인을 위한 패키지
    - ~~antd, Formik, yup~~ (해결)

- ~~리액트 라우트까지 사용했는데 페이지를 완전히 다시 render 되는 것 같은데 의도한것인지?~~ => a 링크로 되어있던 코드를 react-router-dom 에서 제공해주는 Link 를 사용 하여 해결

- HOC 로 구현되어있는 auth.js 설명

- ~~UploadProductPage 에서 구현된것과 RegisterPage 에서 구현된것에서 약간의 차이가 있는데 이에 대해 설명을 한다면?~~ => Fomik 이란 패키지로 폼에 구현된 값들의 검증을 보다 쉽게하기위한것과 antd 에서 제공하는 폼의 형식의 차이로 인해서 구분해놨지면 현재 다 수정
    - ~~handler 구현의 차이~~ (해결)

## SERVER


# TODO

- [ ] 검색 히스토리 리스트
- [X] Form validation 과정 일치화
- [X] 결과 리스트 구현
- [ ] jsx 변환
- [X] 라우터 변경
- [X] redux, react-redux 로 Action 이동