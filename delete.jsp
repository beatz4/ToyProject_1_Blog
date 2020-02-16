<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ page import="java.util.regex.Pattern" %>
<%@ page import="java.sql.*" %>  

<!DOCTYPE html PUBLIC="-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>게시글 삭제</title>
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
    String idx = request.getParameter("idx");

    try {
      String driverName = "oracle.jdbc.driver.OracleDriver";
      String url  = "jdbc:oracle:thin:@localhost:1521:orcl";
      ResultSet rs = null;

      Class.forName(driverName);
      Connection con = DriverManager.getConnection(url, "board", "1234");

      Statement stmt = con.createStatement();
      String sql = "delete from board where idx = " + idx;
      rs = stmt.executeQuery(sql);
      con.close();
    } catch(Exception e) {
        out.println("Oracle Database Connection Something Problem. <hr>");
        out.println(e.getMessage());
        e.printStackTrace();
    }
  %>
  <script>
      alert("게시글이 삭제되었습니다");
      location.href="redirect.jsp";
  </script>
  <body>
  </body>
</html>