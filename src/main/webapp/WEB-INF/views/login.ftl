<#import 'template/html.ftl' as html>
<#import 'template/jquery.ftl' as jquery>
<#import 'template/script.ftl' as script>
<#import 'template/spring.ftl' as spring>


<@html.html>
    <@html.head title="Авторизация">
    </@html.head>
    <@html.body>

    <form name="f" action="j_spring_security_check" method="POST">
        <table>
            <tr><td>User:</td><td><input type='text' name='j_username' value=''/></td></tr>
            <tr><td>Password:</td><td><input type='password' name='j_password' value=''/></td></tr>
            <tr><td><input type="checkbox" name="_spring_security_remember_me"/></td><td>Don't ask for my password for two weeks</td></tr>
            <tr><td colspan='2'><input name="submit" type="submit"></td></tr>
            <tr><td colspan='2'><input name="reset" type="reset"></td></tr>
        </table>
    </form>


    </@html.body>
</@html.html>
