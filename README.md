# 학습순서
## JSX 

## BABEL
```
D:\study\react\startReact\hello-world\simple1.js

createElement 를 jsx 로 변환하기위해 babel 로 작업을 해준다. 

npm init 

npm i @babel/core @babel/cli @babel/preset-react -D

# 설치 이후에 다음명령어를 입력 하여 바벨을 실행한다 .

src 폴더를  만든후 이동 

npx babel --watch src --out-dir . --presets @babel/preset-react 

```

## Webpack
### 다양한 기능제공
- 파일 내용을 기반으로 파일 이름에 해시값 추가 => 효율적으로 브라우저 캐싱 이용
- 사용되지 않은 코드 제거
- 자바스크립트 압축
- 환경변수 주입
- ESM , CommonJs 와 같은 모듈방식을 사용



### 설치 
```
npm i webpack webpack-cli [react, react-dom]
```


## create-react-app
### 리액트 개발 환경을 직접 구축하려면 많은 지식과 노력이 필요/ 페이스북에서 관리하는 공식 툴
### cra 명령어 
```
    "start": "react-scripts start", //http 로 하고 싶을경우 set HTTPS=true && npm start
    "build": "react-scripts build",
    "test": "react-scripts test",   //__test__ 폴더 하위 에 있는거는 test 파일로 인식  
    "eject": "react-scripts eject"  //특수한경우가 아니면 하지 않는다. 
```

## css 작성 방법 결정하기 
### 일반적인 css 파일로 작성하기 
```
module 화 해서 해야 충돌이 없음 
간편하게 입력하기위해서 classnames 패키지를 이용
```

### sass scss
```
sass 를 이용하려면 node-sass 모듈을 이용해야함
```
### css-in-js
```
    자바스크립트 안에 css 를 안에 insert 해서 사용하는 방법

    styled-components
```





# 기타 프론트앤드 참고 사이트 
```
👍 Google Font
[구글 폰트 ] https://fonts.google.com/?sidebar.open&selection.family=Noto+Sans+KR:wght@300#standard-styles
[상업용 무료 폰트 사이트 - 눈누] https://noonnu.cc/

👍 Color - 색상 관련
[Material 색상조합] https://material.io/resources/color/#!/?view.left=0&view.right=0
[Color hunt 색상조합] https://colorhunt.co/
[colorco] https://colourco.de/

👍 무료 아이콘 , 음악
[무료 아이콘] https://fontawesome.com/icons?d=gallery
[무료 음악]https://www.bensound.com/

👍 로고 등 디자인 간편 제작
[Canva] https://www.canva.com/

👍 CSS
[valid 검사]https://validator.w3.org/
[css reset] https://meyerweb.com/eric/tools/css/reset/
[css trigger - 렌더링 관련]https://csstriggers.com/
[css 브라우저 호환 확인]https://caniuse.com/
[box-shadow 생성] https://www.cssmatic.com/box-shadow
[Gradient] https://cssgradient.io/

👍 이미지 관련
[랜덤 이미지 생성] https://picsum.photos/
[cool한 배경] https://coolbackgrounds.io/
[이미지 배경 제거] https://www.remove.bg/ko
[무료 이미지] https://unsplash.com/
[무료 이미지] https://www.pexels.com/ko-kr/
[무료 이미지 사이트 추천 링크] https://techcloud.kr/no-copyright-free-image-websites/

👍 디자인 참고
[dribbble] https://dribbble.com/
[awwards] https://www.awwwards.com/
[국내 디자인 korea 웹디자인] http://koreawebdesign.com/site/
[반응형 미디어쿼리] https://mediaqueri.es/

👍 웹사이트 로딩 스피드 분석
[로딩 스피드] https://developers.google.com/speed/pagespeed/insights/

👍 코딩 컨벤션
[토스트UI NHN] https://ui.toast.com/fe-guide/ko_CODING-CONVENTION

👍 정규 표현식 (Regex) 확인
[Regex] https://regexr.com/

👍 문서 구조 생성 (ascii - tree)
[Ascii tree] https://ascii-tree-generator.com/


```