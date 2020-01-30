<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <title>글쓰기</title>        
    </head>
    <body>
        <script>
            function formCheck() {
                if (fr.title.value == null || fr.title.value == "") {
                    alert('제목을 입력하세요.');
                    fr.title.focus();
                    return false;
                }
        
                if (fr.writer.value == null || fr.writer.value == "") {
                    alert('작성자를 입력하세요.');
                    fr.writer.focus();
                    return false;
                } else if (fr.writer.value.match(/^(\w+)@(\w+)[.](\w+)$/ig) == null) {
                    alert('이메일 형식으로 입력하세요.')
                    fr.writer.focus();
                    return false;
                }
        
                if (fr.content.value == null || fr.content.value == "") {
                    alert('내용을 입력하세요.');
                    fr.content.focus();
                    return false;
                }
        
                if (fr.regdate.value == null || fr.regdate.value == "") {
                    alert('날짜를 입력하세요.');
                    fr.regdate.focus();
                    return false;
                } else if(fr.regdate.value.match(/^\d\d\d\d\d\d+$/ig) == null) {
                    alert('숫자 형식(6자리)으로 입력하세요.');
                    fr.regdate.focus();
                    return false;
                }
            }
        </script>

        <form name="fr" action="post.jsp" method="post" onsubmit="return formCheck();">
            제목 : <input type="text" name="title" id="name"/><br/>
            작성자 : <input type="text" name="writer"id="writer"/><br/>
            날짜 : <input type="text" name="regdate" /><br/>
            content : <textarea rows="10" cols="20" name="content" id="content"></textarea><br>
            <input type="submit"/>
        </form>
    </body>
</html>