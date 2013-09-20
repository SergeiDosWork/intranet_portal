<#ftl encoding="UTF-8">
<#import 'spring.ftl' as spring>
<#import 'jquery.ftl' as jquery>
<#import 'script.ftl' as script>

<#macro html>
<!DOCTYPE html>
<html>
    <#nested>
</html>
</#macro>


<#macro head title=''>
<head lang="ru-RU">
    <title>${title!''}</title>
    <meta charset="UTF-8">
    <meta http-equiv="Pragma" content="No-Cache"/>
    <meta http-equiv="Cache-Control" content="no-cache, must-revalidate"/>
    <meta http-equiv="Cache-Control" content="no-store, post-check=0, pre-check=0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <#--<link rel="shortcut icon" href="/favicon.ico?v2" />-->
    <#--<link rel="icon" type="image/png" href="<@spring.url '/htdocs/img/icons/russia-flag.png'/>">-->

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <link rel="stylesheet" type="text/css" href="<@spring.url '/resources/css/style.css'/>"/>
    <script type="text/javascript" src="<@spring.url '/resources/js/jquery-1.10.2.min.js'/>" charset="UTF-8"></script>
    <@script.scripttag>
        <@jquery.onready>
            <#--$.datepicker.setDefaults($.datepicker.regional['ru']);-->
            $(window).bind('beforeunload', shadow);
            $(window).bind('unload', shadow);
            window.onbeforeunload = shadow;
        </@jquery.onready>
    </@script.scripttag>
    <#nested>
</head>
</#macro>

<#macro body logoutHidden=false crumbs=true isMain=false crumbsText="">
<body>
    <#nested>
</body>
</#macro>