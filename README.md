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
