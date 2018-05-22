$(document).ready(function(){
    let counter = 0;
    let chose = -1;
    $("#yl").click(function(){
        $("#yl").hide();
        $("#tj").hide();
        $("#bj").show();
        $(".btnr").hide();
    })
    $("#bj").click(function(){
        $("#yl").show();
        $("#tj").show();
        $("#bj").hide();
        $(".btnr").show();
    })
    $("#btnt").click(function(){
        if(chose==1){
            let tr = "<tr> <td>文本</td><td><button class='btn btn-warning btnr'>删除</button></td></tr>"
            $("tbody").append(tr);
            $(".btnr").click(function(){
                 let obj = $(this).parents('tr').remove();
             })

        }else if(chose==2){
            console.log('debug2');
            $("tbody").append(`<tr> <td>日期</td><td><button class="btn btn-warning btnr">删除</button></td></tr>`);

            $(".btnr").click(function(){
             let obj = $(this).parents('tr').remove();
            })
        }
    })
    $("#li1").click(function(){
        chose = 1;
        $("#li2").css("background","");
        $("#li1").css("background","red");
    })
    $("#li2").click(function(){
        chose = 2;
        $("#li1").css("background","");
        $("#li2").css("background","red");
    })
    console.log('jquery');

    $(".btnr").click(function(){
        let obj = $(this).parents('tr').remove();
    })
});