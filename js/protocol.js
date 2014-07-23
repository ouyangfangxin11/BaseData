var checkClicked = function(dom) {
    if (dom.checked) {
        $(dom).parent().find("i").addClass("glyphicon glyphicon-ok");
    } else {
        $(dom).parent().find("i").removeClass("glyphicon glyphicon-ok");
    }
};
var checkAll = function(dom) {
    if (dom.checked) {
        $(".checkbox input").parent().find("i").addClass("glyphicon glyphicon-ok");
    } else {
        $(".checkbox input").parent().find("i").removeClass("glyphicon glyphicon-ok");
    }
};


var editContent = function(dom){  
    var td = $(dom);
    var text = td.text();
    var txt = $("<input type='text'>").val(text);
    txt.blur(function(){
        var newText = $(this).val();
        $(this).remove();
        td.text(newText);
    });
    txt.keypress(function(e){
        var code = event.keyCode; 
        if (13 == code) { 
        var newText = $(this).val();
        $(this).remove();
        td.text(newText);
        }
    });
    td.text("");
    td.append(txt);
}; 

var deleteContent = function(dom){
    $(dom).parent().parent().remove();
};

$("#deleteScheme").click(function(){
    $(".checkbox input").each(function(){
        if($(this).parent().find("i").hasClass("glyphicon glyphicon-ok"))
            $(this).parent().parent().parent().remove();
    })
});

$("#resetScheme").click(function(){
    $("#inputprotocolID").val("");
    $("#inputprotocolName").val("");
    $("#inputprotocolIdentify").val("");
    $("#inputmodelIdentify").val("");
    $("#inputmodelIdentifyPara").val("");
    $("#inputprotocolAnalyze").val("");
});

$("#submitAddScheme").click(function(){
    if($("#inputprotocolID").val() != "" && $("#inputprotocolName").val() != "" && $("#inputprotocolIdentify").val() != "" && $("#inputmodelIdentify").val() != "" && $("#inputmodelIdentifyPara").val() != "" && $("#inputprotocolAnalyze").val() != ""){
        var newRow='<tr><td><label class="checkbox"><input type="checkbox" name="checkbox-inline"><i></i></label></td><td><button type="button" class="btn btn-default btn-xs" onclick="deleteContent(this)"><span class="glyphicon glyphicon-remove"></span></button></td><td class="row-content" ondblclick="editContent(this)">'+$("#inputprotocolID").val()+'</td><td class="row-content" ondblclick="editContent(this)">'+$("#inputprotocolName").val()+'</td><td class="row-content" ondblclick="editContent(this)">'+$("#inputprotocolIdentify").val()+'</td><td class="row-content" ondblclick="editContent(this)">'+$("#inputmodelIdentify").val()+'</td><td class="row-content" ondblclick="editContent(this)">'+$("#inputmodelIdentifyPara").val()+'</td><td class="row-content" ondblclick="editContent(this)">'+$("#inputprotocolAnalyze").val()+'</td></tr>' ;
        $("#scheme-table").append(newRow);
        $("#inputprotocolID").val("");
        $("#inputprotocolName").val("");
        $("#inputprotocolIdentify").val("");
        $("#inputmodelIdentify").val("");
        $("#inputmodelIdentifyPara").val("");
        $("#inputprotocolAnalyze").val("");
    }
    else{
        alert("参数设置不完整！");
    }
});