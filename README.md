# * Toy Project - Blog Home Page (1차)

가장 기본적인 웹페이지를 만드는 것을 목표로함.
- html, css, js를 기본으로 사용.
- 완료 기간 : 1달
- 1주 : main page 완성
- 2주 : post page 완성
- 3주 : post에 쓰기/ 읽기등등 기능을 js파일을 연동하여 구현
- 4주 : 테스트 및 디버깅

# * Node JS

- Web Server System
- Open Source System
- JaavaScript on the server

1. PHP or ASP
- 모든 처리를 다 한뒤 전송

2. Node js
- 기다리는 시간없이 그때마다 전송
- single thread, non-blocking, asynchronously programming => 메모리 관리가 효율성 있다.

- 실행 방법
-> cmd에 명령어 실행하여 서버를 가동
-> node xxx.js
-> 생성한 포트로 접속

- 외부 라이브러리로 만들경우 함수명 앞에 exports.접두어를 붙혀서 외부 호출이 가능하도록 한다.
- 상위 폴더로 이동하는 경로 지정은 '../'로 사용된다. './' 금지!!
- readFile 메서드를 호출할 경우 해당 fs에 관한 함수가 모두 호출되는 것 같다. ==> 확인필요
- email nodemailer library를 사용하여 정보를 입력후 실행하면 메일 전달을 확인할 수 있다.
- google 계정을 사용할 경우 보안 지수를 낮음으로 설정해주어야한다.

# * Mongo DB
- Mongo DB 사용을 위해 Node JS를 사용해야한다.

# ----------------------------------- * TIPS -----------------------------------

# * mac 기본 명령어
- 포트 사용 프로세스 확인
sudo lsof -i :"포트 번호"

- 프로세스 종료
sudo kill -9 "프로세스 번호"

# * Visual Studio 단축키
- 자동 들여쓰기 정렬 : 모두 선택 후 alt+f8 또는 ctrl + k, f