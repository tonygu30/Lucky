
$(function(){


    var stt = new Array()
    stt[0] = "下列哪一個敘述符合你的理財需求？"
    stt[1] = "哪一個比較符合你的看法？"
    stt[2] = "哪一個較符合你的現狀？"
    stt[3] = "你認為哪一種商品最適合投資？"
    stt[4] = "請問你對於風險與報酬的接受度？"


    var N = 0; //用來計算字數
    var soga = -1 //用來計算問題題目Array數字
    var q_div=$(".q_answer>div")
    var tn=0;
    var ttu=0;

     
     q_div.click(function(){
    
       if($(".q_tt b").hasClass("yoyo")){
        tn+=$(this).data("tt");

        console.log("這題分數是"+$(this).data("tt"))
        console.log("目前總分是"+tn)
        aaa();
    }
     })


     setInterval(function(){

       var nb=["Loading...","Loading..","Loading."]
    if(ttu<nb.length){
        ttu++
        $(".loading_box span").html(nb[ttu])
    }else{
        ttu=0
        $(".loading_box span").html(nb[ttu])
    }
       

     },400)


    function aaa() {

        soga++

        if(soga==5 && tn<=9 && tn>=7){
            $(".loading_box").css("display","block")
            $(".q_box").removeClass("cc_box")
            $(".q_tt").css("display","none")
            setTimeout(function(){
               location.href="aw_1.html"
            },3000)
            
            return 
        }else if(soga==5 && tn<=6 && tn>=5){
            $(".loading_box").css("display","block")
            $(".q_box").removeClass("cc_box")
            $(".q_tt").css("display","none")
            setTimeout(function(){
               location.href="aw_2.html"
            },3000)
            return
        }else if(soga==5 && tn<=4 && tn>=3){
            $(".loading_box").css("display","block")
            $(".q_box").removeClass("cc_box")
            $(".q_tt").css("display","none")
            setTimeout(function(){
               location.href="aw_3.html"
            },3000)
            return
        }else if(soga==5 && tn<=2 && tn>=0){
            $(".loading_box").css("display","block")
            $(".q_box").removeClass("cc_box")
            $(".q_tt").css("display","none")
            setTimeout(function(){
               location.href="aw_4.html"
            },3000)
            return
        }




        Timer = setInterval(function() {

            if (N <= stt[soga].length) {
                N++;
                $(".q_tt b").html(stt[soga].substr(0, N) + ("<span></span>"));
                $(".q_tt b").removeClass();
                $(".q_tt>span").html("QUESTION "+(soga+1))
                $("nav a").removeClass("active")
                $("nav a").eq(soga).addClass("active")
                $(".q_box").removeClass("cc_box")
                $(".q_box").eq(soga).addClass("cc_box")
            } else {
                clearInterval(Timer);
                setTimeout(function() {
                    $(".q_tt b>span").css("display","none");
                    $(".q_tt b").addClass("yoyo");
                    N = 0;
                }, 1000);
            };

        }, 70);

    };
    aaa()



    $(".g_bg").click(function(){
        $(".g_bg").hide();
    })

    $(".chicken_box a").click(function(){
        $(".g_bg").show();
    })
    
    $("span.note_box").click(function(){
        $(".g_bg1").show();
    })

    $(".g_bg1").click(function(){
        $(".g_bg1").hide();
    })



})



























