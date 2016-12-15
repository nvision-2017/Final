  var csscontent,cssmenu,cssmenuhover,initstate,current = window.location.pathname,curIndex;

    var randomRotateC = function(){
    if(!$(this).hasClass('rotated')){
      $(this).addClass('rotated');
    }
    else{
      $(this).removeClass('rotated');
    }
     if(!$(this).hasClass('active')){
        if(!$(this).hasClass('animated')){
          $(this).addClass('animated');
        var csst = {
        'transition-delay' : '200ms',
        '-moz-transform'      :   'perspective(2000px) rotateX(180deg)',
        '-webkit-transform'      :   'perspective(2000px) rotateX(180deg)',
        };
        $(this).css(csst);
        }
       else{
         $(this).removeClass('animated');
         var csst = {
          'transition-delay' : '200ms',
          '-moz-transform'      :   'perspective(2000px) rotateX(0deg)',
          '-webkit-transform'      :   'perspective(2000px) rotateX(0deg)',
        }
        $(this).css(csst);
   }
     }


  }
  // expand and retract the menu
  function setPageBg()
  {
                  var bg=$("#pageBg").attr('data-bg');
              if(bg){
                $("#container").css('background',bg);
              }

              else{
                $("#container").css('background-image','url('+$("#pageBg").attr('src')+')');
                $("#container").css('background-size','100% 100%');
              }

  }
  var menu = function(){
    expand = function(){


        $("#contactcontent").animate({left:0},500);
       csscontent = {
       'transform'                      :'perspective(3000px) rotateY(-20deg) translateX(50px)',
       '-ms-transform'                  :'perspective(3000px) rotateY(-20deg) translateX(50px)', /* IE 9 */
       '-webkit-transform'              :'perspective(3000px) rotateY(-20deg) translateX(50px)', /* Safari and Chrome */
       '-webkit-transition'             :' all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
       '-moz-transition'             :' all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
       '-ms-transition'             :' all 500ms cubic-bezier(0.77, 0, 0.175, 1)',

      }
      $("#container").css(csscontent);
      cssmenu = {
       'transform'                      :'translateX(210px)',
       '-ms-transform'                  :'translateX(210px)', /* IE 9 */
       '-webkit-transform'              :'translateX(210px)', /* Safari and Chrome */
       '-webkit-transition'             :' all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
       '-moz-transition'             :' all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
       '-ms-transition'             :' all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
      }
      $("#menubar").css(cssmenu);
      cssmenuhover = {
        'opacity'                : '0',
        '-webkit-transition'             :' all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
       '-moz-transition'             :' all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
       '-ms-transition'             :' all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
      }
      $("#menuhover").css(cssmenuhover);
    },
    retract = function(){

     csscontent = {
       'transform'                      :' perspective(3000px) rotateY(0deg)',
       '-ms-transform'                  :'perspective(3000px) rotateY(0deg)', /* IE 9 */
       '-webkit-transform'              :'perspective(3000px) rotateY(0deg)', /* Safari and Chrome */
       '-webkit-transition'             :' all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
       '-moz-transition'             :' all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
       '-ms-transition'             :' all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
      }
      $("#container").css(csscontent);
       cssmenu = {
       'transform'                      :'translateX(0px)',
       '-ms-transform'                  :'translateX(0px)', /* IE 9 */
       '-webkit-transform'              :'translateX(0px)', /* Safari and Chrome */
       '-webkit-transition'             :' all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
       '-moz-transition'             :' all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
       '-ms-transition'             :' all 500ms cubic-bezier(0.77, 0, 0.175, 1)',

      }
      $("#menubar").css(cssmenu);
      cssmenuhover = {
        'opacity'                : '1',
        '-webkit-transition'             :' all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
       '-moz-transition'             :' all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
       '-ms-transition'             :' all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
      }
      $("#menuhover").css(cssmenuhover);
    };
    return{expand:expand,retract:retract};
  }();


//ajxLoading of the function

  function ajaxLoad(page,data){
        $("#container").scrollTop(0);
        $("#loaderpage").css('z-index',3);
          $("#loaderpage").fadeIn(300,function(){
                 $("#contentloader").fadeOut(500,function(){
        if(page=='/')
          page='/Home';
        $(".pageBg").animate({scrollTop:0},500);
        if(data){
   $("#contentloader").load('/pages/Register/create_cookie.php?'+data,function(){
         setPageBg();
          $("#contentloader").fadeIn(500,function(){
           $("#loaderpage").fadeOut(500,function(){
             $("#loaderpage").css('z-index',4);
             })
            })
          history.replaceState({x:window.location.pathname,params:data},null,window.location.pathname);
          });

        }
        else {
                $("#contentloader").load('/pages'+page+'.htm',function(){
         setPageBg();

          $("#contentloader").fadeIn(500,function(){
           $("#loaderpage").fadeOut(500,function(){
             $("#loaderpage").css('z-index',4);
             })
            })
          });
        }

       });
        });
  }

  //register ajax

  function postAjax(){
    $.ajax({
           type: "POST",
           url: '/pages/Register/Register.php',
           data: $("#sign_up_form").serialize(), // serializes the form's elements.
           success: function(data)
           {
               console.log("yay");
               $("#contentloader").html('<div style="height:50px;width:500px;position:relative;margin:auto;top:200px;font-family:bebasneueregular"></div><br /> <br />' + data); // show response from the php script.
           }
         });

  }




  $(function(){

  curIndex = $(".menulinks")[0];
  //For 3-D Button

  $("body").on("click","button",function(e){
    e.preventDefault();
     $(this).addClass('btn-success3d');
      var url = $(this).attr('url');
            setTimeout(function(){
                 window.open(url, '_blank ');
                 console.log('hi');
       $(".btn").removeClass('btn-success3d');
      },1000);
      return false;
  })

  //Intialising the menu effect

    $("#menuhover").on('mouseenter',menu.expand);
    $("#container").on('mouseenter',menu.retract);

  //history.pushState initial page
    history.replaceState({x:window.location.pathname},null,window.location.pathname);

  //add click function to all the 'a' except the one with class 'external'
    $("body").on("click","a:not(.external)",function(e){
      e.preventDefault();
      var page=$(this).attr('href');
      if(page!=history.state.x)
        history.pushState({x:page},null,page);
      ajaxLoad(page,$(this).attr('params'));
    })

  //enable the back button

    window.onpopstate = function (e){
       if(e.state){
          $(".menulinks").each(function(){
          if(e.state.x.search($(this).attr('href').replace('/',''))>=1)
          {
            $(".menuDiv",$(".menulinks")[0]).css('top','0');
            $(".menuDiv",this).css('top','-55px');
            curIndex=this;
          }
          ajaxLoad(e.state.x,e.state.params);
      })
       }
     }
    setPageBg();

    //menu hover effects

      $(".menuDiv",$(".menulinks")[0]).css('top','-55px');
      $(".menulinks").each(function(){
          if(current.search($(this).attr('href').replace('/',''))>=1)
          {
            $(".menuDiv",$(".menulinks")[0]).css('top','0');
            $(".menuDiv",this).css('top','-55px');
            curIndex=this;
          }
      })

      $(".menulinks").hover(function(){
       $(".menuDiv",this).css('top','-55px');
    },function(){


     $(".menuDiv").not($(".menuDiv",curIndex)).css('top','0');
      $(".menuDiv",curIndex).css('top','-55px');

    })

    $(".menulinks").click(function(e){
      curIndex=this;
      $(".menuDiv").not($(".menuDiv",curIndex)).css('top','0');
         $(".menuDiv",curIndex).css('top','-55px');
    })


    }

  )
