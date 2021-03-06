<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ page import="java.util.regex.Pattern" %>
<%@ page import="java.sql.*" %>  

<!DOCTYPE html PUBLIC="-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>게시판</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/style.css;">
    <link rel="stylesheet" type="text/css" href="css/board.css">
    <script
            src="https://code.jquery.com/jquery-1.11.0.js"
            integrity="sha256-zgND4db0iXaO7v4CLBIYHGoIIudWI5hRMQrPB20j0Qw="
            crossorigin="anonymous"></script>
    <script src="header.js"></script>
  </head>
  <%
    try {
      String driverName = "oracle.jdbc.driver.OracleDriver";
      String url  = "jdbc:oracle:thin:@localhost:1521:orcl";
      ResultSet rs = null;

      Class.forName(driverName);
      Connection con = DriverManager.getConnection(url, "board", "1234");
      //out.println("Oracle Database connection success.");

      Statement stmt = con.createStatement();
      String sql = "select * from board order by idx desc";
      rs = stmt.executeQuery(sql);
  %>

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
          <%
            while(rs.next()) {
              out.print("<tr>");
              out.print("<td>" + rs.getString(1) + "</td>");
              out.print("<td> <a href='content.jsp?idx=" + rs.getString("idx") +"'>" + rs.getString("title") + "</a></td>");
              out.print("<td>" + rs.getString(3) + "</td>");
              out.print("<td>" + rs.getString(4) + "</td>");
              out.print("<td>" + rs.getString(5) + "</td>");
              out.print("</tr>");
            }
          %>
        </table>
        <a href="write.jsp">글쓰기</a>
        <%
        con.close();
        } catch(Exception e) {
            out.println("Oracle Database Connection Something Problem. <hr>");
            out.println(e.getMessage());
            e.printStackTrace();
        }
        %>
    </div>
  </body>
</html>