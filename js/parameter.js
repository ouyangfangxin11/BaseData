var allowDrop = function(ev) {
    ev.preventDefault();
};
var drag = function(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
};
var drop = function(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    var dom = document.getElementById(data);
    var oldlength = $('#oldmodel').find('tr').length;
    var newlength = $('.emptytable').length;
    var length = $("#newmodel").children().length - newlength + 1;
    var template = "<tr><td><label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox-inline\" disabled='disabled'></label></td><td></td><td></td><td></td><td></td><td></td><td class=\"hidden\"></td></tr>";
    if (--oldlength < 20) {
        $("#oldmodel").append(template);
    };
    $(dom).attr("draggable", "false");
    template = "<i class=\"glyphicon glyphicon-trash\" onclick=\"delete1(this)\"></i> ";
    template += length.toString()
    template += "<i class=\"glyphicon glyphicon-collapse-up\" onclick=\"up(this)\"></i>";
    template += "<i class=\"glyphicon glyphicon-collapse-down \" onclick=\"down(this)\"></i>";
    $($(dom).find("td")[0]).html(template);
    $(dom).find("td").removeClass('hidden');
    if (newlength > 0) {
        $($('.emptytable')[0]).before(dom);
        $($('.emptytable')[0]).remove();
    } else {
        $("#newmodel").append(dom);
    }
};
var check = function(dom) {
    if (dom.checked) {
        $(dom).parent().find("i").addClass("glyphicon glyphicon-ok");
    } else {
        $(dom).parent().find("i").removeClass("glyphicon glyphicon-ok");
    }
};
var changeParameter = function() {
    var selected = $("#inputParameter").val();
    if (selected == 3) {
        $('#inputCondition').attr("disabled", "disabled");
        $('#inputUnit').attr("disabled", "disabled");
    } else {
        $('#inputCondition').removeAttr("disabled");
        $('#inputUnit').removeAttr("disabled");
    };
};
var delete1 = function(dom) {
    var dom = $(dom).parent().parent();
    var doms = $(dom).nextAll();
    for (var i = 0; i < doms.length; i++) {
        var orderdom = $(doms[i]).find('td')[0];
        if ($(orderdom).children().first().length != 0) {
            template = "<i class=\"glyphicon glyphicon-trash\" onclick=\"delete1(this)\"></i> ";
            template += (parseInt($(orderdom).text()) - 1).toString();
            template += "<i class=\"glyphicon glyphicon-collapse-up\" onclick=\"up(this)\"></i>";
            template += "<i class=\"glyphicon glyphicon-collapse-down \" onclick=\"down(this)\"></i>";
            $(orderdom).html(template);
        } else {
            $(orderdom).html((parseInt($(orderdom).text()) - 1).toString());
        };
    };
    $(dom).attr("draggable", "true");
    $($(dom).find('td')[0]).html("<label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox-inline\" onclick=\"check(this)\"><i></i></label>");
    $(dom).find('td').last().addClass('hidden');
    $("#oldmodel").prepend(dom);
};
var up = function(dom) {
    var dom = $(dom).parent().parent();
    if ($(dom).prev().length != 0) {
        var orderdom = $(dom).find('td')[0];
        var template = "<i class=\"glyphicon glyphicon-trash\" onclick=\"delete1(this)\"></i> ";
        template += (parseInt($(orderdom).text()) - 1).toString();
        template += "<i class=\"glyphicon glyphicon-collapse-up\" onclick=\"up(this)\"></i>";
        template += "<i class=\"glyphicon glyphicon-collapse-down \" onclick=\"down(this)\"></i>";
        $(orderdom).html(template);
        var orderdom = $(dom).prev().find('td')[0];
        var template = "<i class=\"glyphicon glyphicon-trash\" onclick=\"delete1(this)\"></i> ";
        template += (parseInt($(orderdom).text()) + 1).toString();
        template += "<i class=\"glyphicon glyphicon-collapse-up\" onclick=\"up(this)\"></i>";
        template += "<i class=\"glyphicon glyphicon-collapse-down \" onclick=\"down(this)\"></i>";
        $(orderdom).html(template);
        $(dom).prev().before(dom);
    };
};
var down = function(dom) {
    var dom = $(dom).parent().parent();
    if ($(dom).next().length != 0 && $(dom).next().hasClass('emptytable') == false) {
        var orderdom = $(dom).find('td')[0];
        var template = "<i class=\"glyphicon glyphicon-trash\" onclick=\"delete1(this)\"></i> ";
        template += (parseInt($(orderdom).text()) + 1).toString();
        template += "<i class=\"glyphicon glyphicon-collapse-up\" onclick=\"up(this)\"></i>";
        template += "<i class=\"glyphicon glyphicon-collapse-down \" onclick=\"down(this)\"></i>";
        $(orderdom).html(template);
        var orderdom = $(dom).next().find('td')[0];
        var template = "<i class=\"glyphicon glyphicon-trash\" onclick=\"delete1(this)\"></i> ";
        template += (parseInt($(orderdom).text()) - 1).toString();
        template += "<i class=\"glyphicon glyphicon-collapse-up\" onclick=\"up(this)\"></i>";
        template += "<i class=\"glyphicon glyphicon-collapse-down \" onclick=\"down(this)\"></i>";
        $(orderdom).html(template);
        $(dom).next().after(dom);
    };
};