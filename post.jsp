<%@ page contentType="text/html; charset=utf-8" %>

<!DOCTYPE html PUBLIC="-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>게시판</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script
            src="https://code.jquery.com/jquery-1.11.0.js"
            integrity="sha256-zgND4db0iXaO7v4CLBIYHGoIIudWI5hRMQrPB20j0Qw="
            crossorigin="anonymous"></script>
      <script src="header.js"></script>
  </head>

  <body>
     <!-- TOP MENU -->
    <div id="header"></div>
    <!-- CONTENT -->
    <div class="content">
      <h1>게시글 리스트</h1>
        <table>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
            <th>조회수</th>
          </tr>
          <tr>
            <td>1</td>
            <td>테스트1</td>
            <td>Admin</td>
            <td>today</td>
            <td>100</td>
          </tr>
        </table>
        <a href="write.jsp">글쓰기</a>
    </div>
  </body>
</html>