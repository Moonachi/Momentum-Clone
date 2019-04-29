# Momentum-Clone

### 설명

구글 확장프로그램 `Momentum` Clone 코딩

### 사용 언어

- HTML5
- CSS
- JavaScript

### 작업 목록

- [x] 시계 구현
- [x] 이름 저장
- [x] ToDoList 목록
- [x] ToDoList 삭제
- [x] 배경 이미지 설정
- [x] Geolocation API
- [x] CSS 작업
- [x] 명언 추가

### 개념

- localStorage에는 string으로 저장 (JSON.stringify())
- 따라서 다시 불러오고 Object로 변환해주어야 한다. (parse.JSON())
- 삭제 시 todo.js에서 cleanToDos에 filter로 해당 이벤트가 아닌 것들만 찾아서 저장한다.
- 삭제 후 id가 다시 1부터 시작하는 이유는 todo.js에서 toDo = []로 시작하기 때문이다.

### 주의사항

- weather.js에서 `API_KEY` 변수에 `자신의 API_KEY`를 넣어야합니다.
  https://openweathermap.org/api 해당 사이트 API_KEY 발급 받으시면 됩니다.
- `images 폴더`를 만든 후 배경 이미지로 사용할 이미지 `1.jpg, 2.jpg, 3.jpg` 총 3장을 넣어야 합니다.

### 결과물

- API_KEY를 넣은 경우 아래와 같이 결과가 나타납니다.

<img src="./result/완성 1.PNG">
<img src="./result/완성 2.PNG">
