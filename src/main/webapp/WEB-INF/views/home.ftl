<#import 'template/html.ftl' as html>
<#import 'template/jquery.ftl' as jquery>
<#import 'template/script.ftl' as script>
<#import 'template/spring.ftl' as spring>

<@html.html>
    <@html.head title="Главная страница">
    </@html.head>
    <@html.body>

        Privet<br/>
        Username: ${username!""} <br/>
        <#if !logined>
        <a href="/login">Login</a>
        <#else>
        <a href="/j_spring_security_logout">Logout</a>
        </#if>

    </@html.body>
</@html.html>