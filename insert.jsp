<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="java.util.regex.Pattern" %>
<%@ page import="java.sql.*" %>

<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title>Insert title here</title>        
    </head>
    <%
        String title = request.getParameter("title");
        String writer = request.getParameter("writer");
        String regdate = request.getParameter("regdate");
        String content = request.getParameter("content");
        int count = 0;

        if(title == "" || title == null) out.println("title이 null입니다.");

        if(writer == "" || writer == null)
        out.println("writer가 null입니다.");
        else if(!Pattern.matches("^[_0-9a-zA-Z-]+@[0-9a-zA-Z-]+(.[_0-9a-zA-Z-]+)*$", writer))
        out.println("이메일 형식이 아닙니다.");
        
        if(regdate == "" || regdate == null)
        out.println("regdate가 null입니다.");
        else if(!Pattern.matches("^[0-9]*$", regdate))
        out.println("숫자형식이 아닙니다.");

        if(content == "" || content == null) out.println("content가 null입니다.");

        try {
            String driverName = "oracle.jdbc.driver.OracleDriver";
            String url  = "jdbc:oracle:thin:@localhost:1521:orcl";

            Class.forName(driverName);
            Connection con = DriverManager.getConnection(url, "board", "1234");
            out.println("Oracle 데이터베이스 db에 성공적으로 접속했습니다.");

            Statement stmt = con.createStatement();
            String sql = "INSERT INTO BOARD" + 
                            "(IDX, TITLE, WRITER, REGDATE, COUNT, CONTENT) " +
                            "VALUES (board_seq.nextval, '" + title + "', '" + writer + "', sysdate, '"+ count +"', '"+ content + "')";
            stmt.executeUpdate(sql);
            con.close();
        } catch(Exception e) {
            out.println("Oracle 데이터베이스 db 접속에 문제가 있습니다. <hr>");
            out.println(e.getMessage());
            e.printStackTrace();
        } finally {
            out.print("<script>location.href='post.jsp';</script>");
        }
    %>
    <body>
    </body>
</html>