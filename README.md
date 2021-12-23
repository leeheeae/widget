# widget

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Widget 기능이 있는 API 대쉬보드 사이트

### 기능 구현

-   [ ] 위젯 생성
-   [ ] 생성한 위젯 드래그로 이동하여 순서 변경
-   [ ] 위젯 사이즈 조절
-   [ ] 부드럽게 위젯 위치 찾아가기

---

1. 위젯 생성

-   [ ] Vuex를 이용하여 생성된 위젯 관리하기
-   [x] 테스트용 데이터 [{name: "",width: "", heigth: "", }]

2. 생성한 위젯 드래그로 이동하여 순서 변경

-   [x] 1. 드래그 가능하도록 설정
-   [x] 2. 클릭한 위치에서 바로 드래그 가능하도록 설정
-   [x] 3. 놓았을 때 자동으로 붙도록 설정
-   [ ] 4. 사이즈 조절 시 텍스트만 변경되는 부분 수정

3. 위젯 사이즈 조절

-   [x] 1. 전체방향 사이즈 조절 바 생성 -> 좌우, 상하로 변경 (width, height을 늘리기 때문에 왼쪽 위쪽으로 늘어나는 효과는 어려워보임)
