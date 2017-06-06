
  var n=1;
  var i=1;
$(".change-bg").click(
  function(){
    if (n%3==1&&i%3==2) {
      $("#header").css("background-image","url(./image/n3399CC/head1.png)");
      
      console.log(n);

    }
    if (n%3==2&&i%3==2) {
      $("#header").css("background-image","url(./image/n3399CC/head2.png)");
      
      console.log(n);

    }
    if (n%3==0&&i%3==2) {
      $("#header").css("background-image","url(./image/n3399CC/head3.png)");
      
      console.log(n);

    }

    if (n%3==1&&i%3==0) {
      $("#header").css("background-image","url(./image/n6699CC/head1.png)");
      
      console.log(n);

    }
    if (n%3==2&&i%3==0) {
      $("#header").css("background-image","url(./image/n6699CC/head2.png)");
      
      console.log(n);

    }
    if (n%3==0&&i%3==0) {
      $("#header").css("background-image","url(./image/n6699CC/head3.png)");
      
      console.log(n);

    }

    if (n%3==1&&i%3==1) {
      $("#header").css("background-image","url(./image/n00318d/head1.png)");
      
      console.log(n);

    }
    if (n%3==2&&i%3==1) {
      $("#header").css("background-image","url(./image/n00318d/head2.png)");
      
      console.log(n);

    }
    if (n%3==0&&i%3==1) {
      $("#header").css("background-image","url(./image/n00318d/head3.png)");
      
      console.log(n);

    }

    n++;

    if (n==4) n=1;
  }
);


 
$(".change-color").click(
  function(){
    if (i%3==1) {
      $("#header").css("background-image","url(./image/n3399CC/head1.png)");
      // $(".change-tab  .active  a").css("background-color","#3399cc ");
      $(".dropdown ul").css("border-top","3px solid #3399cc");
      $(".tab-pane .row").css("border","2px solid #3399cc");
      $(".sub-banner").css("border-bottom","3px solid #3399cc");
      $(".nav a").css("color","#3399cc");
      $(".time").css("color","#3399cc");
      $(".time1").css("color","#3399cc");
      $(".login input").css("border","1px solid #3399cc");
      $(".button1").css("border","2px solid #3399cc");
      $(".button1").css("background-color","#3399cc");
      $(".button2").css("border","2px solid #3399cc");
      $(".button2").css("background-color","#3399cc");
      $(".download-ctent label").css("color","#3399cc");
      $(".download-ctent label").css("border","1px solid #3399cc");
      $("#footer").css("background-color","#3399cc");
      $(".btn-group  button").css("border","1px solid #3399cc");
      $(".btn-group ul").css("border","1px solid #3399cc");
      $("#links").css("color","#3399cc");
      $("#links").css("color","#3399cc");
      $(".tupianxinwen").css("background-color","#3399cc");
      $(".carousel-indicators .active").css("background-color","#3399cc");
      $(".login-img img").attr("src","./image/login_blue/login3.png");
      
      console.log(i);

    }
    if (i%3==2) {
        $("#header").css("background-image","url(./image/n6699CC/head2.png)");
        $(".dropdown ul").css("border-top","3px solid #666699");
      $(".tab-pane .row").css("border","2px solid #6699cc");
      $(".sub-banner").css("border-bottom","3px solid #6699cc");
      $(".nav a").css("color","#6699cc");
      $(".time").css("color","#6699cc");
      $(".time1").css("color","#6699cc");
      $(".login input").css("border","1px solid #6699cc");
      $(".button1").css("border","2px solid #6699cc");
      $(".button1").css("background-color","#6699cc");
      $(".button2").css("border","2px solid #6699cc");
      $(".button2").css("background-color","#6699cc");
      $(".download-ctent label").css("color","#6699cc");
      $(".download-ctent label").css("border","1px solid #6699cc");
      $("#footer").css("background-color","#6699cc");
      $(".btn-group  button").css("border","1px solid #6699cc");
      $(".btn-group ul").css("border","1px solid #6699cc");
      $("#links").css("color","#6699cc");
      $("#links").css("color","#6699cc");
      $(".tupianxinwen").css("background-color","#6699cc");
      $(".carousel-indicators .active").css("background-color","#6699cc");
      $(".login-img img").attr("src","./image/login_blue/login2.png")
      console.log(i);

    }
    if (i%3==0) {
        $("#header").css("background-image","url(./image/n00318d/head3.png)");
        $(".dropdown ul").css("border-top","3px solid #666699");
      $(".tab-pane .row").css("border","2px solid #00318d");
      $(".sub-banner").css("border-bottom","3px solid #00318d");
      $(".nav a").css("color","#00318d");
      $(".time").css("color","#00318d");
      $(".time1").css("color","#00318d");
      $(".login input").css("border","1px solid #00318d");
      $(".button1").css("border","2px solid #00318d");
      $(".button1").css("background-color","#00318d");
      $(".button2").css("border","2px solid #00318d");
      $(".button2").css("background-color","#00318d");
      $(".download-ctent label").css("color","#330030");
      $(".download-ctent label").css("border","1px solid #00318d");
      $("#footer").css("background-color","#00318d");
      $(".btn-group  button").css("border","1px solid #00318d");
      $(".btn-group ul").css("border","1px solid #00318d");
      $("#links").css("color","#00318d");
      $("#links").css("color","#00318d");
      $(".tupianxinwen").css("background-color","#00318d");
      $(".carousel-indicators .active").css("background-color","#00318d");
      $(".login-img img").attr("src","./image/login_blue/login1.png")
      console.log(i);

    }

   //  if (i%5==4) {
   //      $("#header").css("background-image","url(./image/head4.png)");
   //      $(".dropdown ul").css("border-top","3px solid #666699");
   //    $(".tab-pane .row").css("border","2px solid #666699");
   //    $(".sub-banner").css("border-bottom","3px solid #666699");
   //    $(".nav a").css("color","#666699");
   //    $(".time").css("color","#666699");
   //    $(".time1").css("color","#666699");
   //    $(".login input").css("border","1px solid #666699");
   //    $(".button1").css("border","2px solid #666699");
   //    $(".button1").css("background-color","#666699");
   //    $(".button2").css("border","2px solid #666699");
   //    $(".button2").css("background-color","#666699");
   //    $(".download-ctent label").css("color","#336699");
   //    $(".download-ctent label").css("border","1px solid #666699");
   //    $("#footer").css("background-color","#666699");
   //    $(".btn-group  button").css("border","1px solid #666699");
   //    $(".btn-group ul").css("border","1px solid #666699");
   //    $("#links").css("color","#666699");
   //    $("#links").css("color","#666699");
   //    console.log(n);

   //  }
   
   // if (i%5==0) {
   //  $("#header").css("background-image","url(./image/head5.png)");
   //  $(".dropdown ul").css("border-top","3px solid #666699");
   //    $(".tab-pane .row").css("border","2px solid #669966");
   //    $(".sub-banner").css("border-bottom","3px solid #669966");
   //    $(".nav a").css("color","#669966");
   //    $(".time").css("color","#669966");
   //    $(".time1").css("color","#669966");
   //    $(".login input").css("border","1px solid #669966");
   //    $(".button1").css("border","2px solid #669966");
   //    $(".button1").css("background-color","#669966");
   //    $(".button2").css("border","2px solid #669966");
   //    $(".button2").css("background-color","#669966");
   //    $(".download-ctent label").css("color","#339966");
   //    $(".download-ctent label").css("border","1px solid #669966");
   //    $("#footer").css("background-color","#669966");
   //    $(".btn-group  button").css("border","1px solid #669966");
   //    $(".btn-group ul").css("border","1px solid #669966");
   //    $("#links").css("color","#669966");
   //    $("#links").css("color","#669966");
   //    console.log(n);

   //  }
    
    i++;
    if (i==4) i=1;
  }
);


















$(".nav > li").mouseover(function(){
      
    //$(".links-item ul").css("display","block");
	$(this).addClass("open");
    $(".dropdown-menu").css("border-top","3px solid #3399cc");
	
	 
})

$(".nav > li").mouseout(function(){
      
    
	$(this).removeClass("open");
    $(".dropdown-menu").css("border-bottom","0px");
	
})








//设为首页
function SetHome(obj,url){
    try{
        obj.style.behavior='url(#default#homepage)';
        obj.setHomePage(url);
    }catch(e){
        if(window.netscape){
            try{
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }catch(e){
                alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
            }
        }else{
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
        }
    }
}
//收藏本站
function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}