var allowDrop1 = function(ev) {
    ev.preventDefault();
};
var drag1 = function(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
};
var drop1 = function(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    var dom = document.getElementById(data);
    if ($(dom).parent().attr('id') != "oldparameter") {
        return;
    }
    var newlength = $('#newparameter .emptytable').length;
    var length = $("#newparameter").children().length - newlength + 1;
    var colors = ['progress-bar-success', 'progress-bar-warning', 'progress-bar-danger', 'progress-bar-info'];
    $(dom).attr("draggable", "false");
    var template = "<i class=\"glyphicon glyphicon-trash\" onclick=\"delete1(this)\"></i> ";
    template += length.toString()
    template += "<i class=\"glyphicon glyphicon-collapse-up\" onclick=\"up1(this)\"></i>";
    template += "<i class=\"glyphicon glyphicon-collapse-down \" onclick=\"down1(this)\"></i>";
    $($(dom).find("td")[0]).html(template);
    var name = $($(dom).find("td")[2]).html();
    $("#common").append("<option value=\"" + name + "\">" + name + "</option>");
    $("#unique").append("<option value=\"" + name + "\">" + name + "</option>");
    if (newlength > 0) {
        $($('#newparameter .emptytable')[0]).before(dom);
        $($('#newparameter .emptytable')[0]).remove();
    } else {
        $("#newparameter").append(dom);
    };
    var progress = $("#newparameter").children();
    var amount = 0;
    var color = 0;
    $(".progress").children().remove();
    for (var i = 0; i < length; i++) {
        dom = $(progress[i]).children()[4];
        amount += parseInt($(dom).html());
    };
    for (var i = 0; i < length; i++) {
        dom = $(progress[i]).children()[4];
        len = parseInt($(dom).html());
        width = len * 100 / amount;
        template = "<div class=\"progress-bar " + colors[color % 4] + "\" style=\"width: " + width + "%\">" + len + "</div>";
        $(".progress").append(template);
        color++;
    };
};
var allowDrop2 = function(ev) {
    ev.preventDefault();
};
var drag2 = function(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
};
var drop2 = function(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    var dom = document.getElementById(data);
    if ($(dom).parent().attr('id') != "oldscheme") {
        return;
    }
    var newlength = $('#newscheme .emptytable').length;
    var length = $("#newscheme").children().length - newlength + 1;
    $(dom).attr("draggable", "false");
    var template = "<i class=\"glyphicon glyphicon-trash\" onclick=\"delete2(this)\"></i> ";
    template += length.toString()
    template += "<i class=\"glyphicon glyphicon-collapse-up\" onclick=\"up2(this)\"></i>";
    template += "<i class=\"glyphicon glyphicon-collapse-down \" onclick=\"down2(this)\"></i>";
    $($(dom).find("td")[0]).html(template);
    $(dom).find("td").removeClass('hidden');
    if (newlength > 0) {
        $($('#newscheme .emptytable')[0]).before(dom);
        $($('#newscheme .emptytable')[0]).remove();
    } else {
        $("#newscheme").append(dom);
    }
};
var check = function(dom) {
    if (dom.checked) {
        $(dom).parent().find("i").addClass("glyphicon glyphicon-ok");
    } else {
        $(dom).parent().find("i").removeClass("glyphicon glyphicon-ok");
    }
};
var delete1 = function(dom) {
    var dom = $(dom).parent().parent();
    var doms = $(dom).nextAll();
    for (var i = 0; i < doms.length; i++) {
        var orderdom = $(doms[i]).find('td')[0];
        if ($(orderdom).children().first().length != 0) {
            template = "<i class=\"glyphicon glyphicon-trash\" onclick=\"delete1(this)\"></i> ";
            template += (parseInt($(orderdom).text()) - 1).toString();
            template += "<i class=\"glyphicon glyphicon-collapse-up\" onclick=\"up1(this)\"></i>";
            template += "<i class=\"glyphicon glyphicon-collapse-down \" onclick=\"down1(this)\"></i>";
            $(orderdom).html(template);
        } else {
            $(orderdom).html((parseInt($(orderdom).text()) - 1).toString());
        };
    };
    $(dom).attr("draggable", "true");
    $($(dom).find('td')[0]).html("<label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox-inline\" onclick=\"check(this)\"><i></i></label>");
    $("#oldparameter").append(dom);
};
var delete2 = function(dom) {
    var dom = $(dom).parent().parent();
    var doms = $(dom).nextAll();
    for (var i = 0; i < doms.length; i++) {
        var orderdom = $(doms[i]).find('td')[0];
        if ($(orderdom).children().first().length != 0) {
            template = "<i class=\"glyphicon glyphicon-trash\" onclick=\"delete2(this)\"></i> ";
            template += (parseInt($(orderdom).text()) - 1).toString();
            template += "<i class=\"glyphicon glyphicon-collapse-up\" onclick=\"up2(this)\"></i>";
            template += "<i class=\"glyphicon glyphicon-collapse-down \" onclick=\"down2(this)\"></i>";
            $(orderdom).html(template);
        } else {
            $(orderdom).html((parseInt($(orderdom).text()) - 1).toString());
        };
    };
    $(dom).attr("draggable", "true");
    $($(dom).find('td')[0]).html("<label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox-inline\" onclick=\"check(this)\"><i></i></label>");
    $(dom).find('td').last().addClass('hidden');
    $("#oldscheme").append(dom);
};
var up1 = function(dom) {
    var dom = $(dom).parent().parent();
    if ($(dom).prev().length != 0) {
        var orderdom = $(dom).find('td')[0];
        var template = "<i class=\"glyphicon glyphicon-trash\" onclick=\"delete1(this)\"></i> ";
        template += (parseInt($(orderdom).text()) - 1).toString();
        template += "<i class=\"glyphicon glyphicon-collapse-up\" onclick=\"up1(this)\"></i>";
        template += "<i class=\"glyphicon glyphicon-collapse-down \" onclick=\"down1(this)\"></i>";
        $(orderdom).html(template);
        var orderdom = $(dom).prev().find('td')[0];
        var template = "<i class=\"glyphicon glyphicon-trash\" onclick=\"delete1(this)\"></i> ";
        template += (parseInt($(orderdom).text()) + 1).toString();
        template += "<i class=\"glyphicon glyphicon-collapse-up\" onclick=\"up1(this)\"></i>";
        template += "<i class=\"glyphicon glyphicon-collapse-down \" onclick=\"down1(this)\"></i>";
        $(orderdom).html(template);
        $(dom).prev().before(dom);
    };
};
var up2 = function(dom) {
    var dom = $(dom).parent().parent();
    if ($(dom).prev().length != 0) {
        var orderdom = $(dom).find('td')[0];
        var template = "<i class=\"glyphicon glyphicon-trash\" onclick=\"delete2(this)\"></i> ";
        template += (parseInt($(orderdom).text()) - 1).toString();
        template += "<i class=\"glyphicon glyphicon-collapse-up\" onclick=\"up2(this)\"></i>";
        template += "<i class=\"glyphicon glyphicon-collapse-down \" onclick=\"down2(this)\"></i>";
        $(orderdom).html(template);
        var orderdom = $(dom).prev().find('td')[0];
        var template = "<i class=\"glyphicon glyphicon-trash\" onclick=\"delete2(this)\"></i> ";
        template += (parseInt($(orderdom).text()) + 1).toString();
        template += "<i class=\"glyphicon glyphicon-collapse-up\" onclick=\"up2(this)\"></i>";
        template += "<i class=\"glyphicon glyphicon-collapse-down \" onclick=\"down2(this)\"></i>";
        $(orderdom).html(template);
        $(dom).prev().before(dom);
    };
};
var down1 = function(dom) {
    var dom = $(dom).parent().parent();
    if ($(dom).next().length != 0 && $(dom).next().hasClass('emptytable') == false) {
        var orderdom = $(dom).find('td')[0];
        var template = "<i class=\"glyphicon glyphicon-trash\" onclick=\"delete1(this)\"></i> ";
        template += (parseInt($(orderdom).text()) + 1).toString();
        template += "<i class=\"glyphicon glyphicon-collapse-up\" onclick=\"up1(this)\"></i>";
        template += "<i class=\"glyphicon glyphicon-collapse-down \" onclick=\"down1(this)\"></i>";
        $(orderdom).html(template);
        var orderdom = $(dom).next().find('td')[0];
        var template = "<i class=\"glyphicon glyphicon-trash\" onclick=\"delete1(this)\"></i> ";
        template += (parseInt($(orderdom).text()) - 1).toString();
        template += "<i class=\"glyphicon glyphicon-collapse-up\" onclick=\"up1(this)\"></i>";
        template += "<i class=\"glyphicon glyphicon-collapse-down \" onclick=\"down1(this)\"></i>";
        $(orderdom).html(template);
        $(dom).next().after(dom);
    };
};
var down2 = function(dom) {
    var dom = $(dom).parent().parent();
    if ($(dom).next().length != 0 && $(dom).next().hasClass('emptytable') == false) {
        var orderdom = $(dom).find('td')[0];
        var template = "<i class=\"glyphicon glyphicon-trash\" onclick=\"delete2(this)\"></i> ";
        template += (parseInt($(orderdom).text()) + 1).toString();
        template += "<i class=\"glyphicon glyphicon-collapse-up\" onclick=\"up2(this)\"></i>";
        template += "<i class=\"glyphicon glyphicon-collapse-down \" onclick=\"down2(this)\"></i>";
        $(orderdom).html(template);
        var orderdom = $(dom).next().find('td')[0];
        var template = "<i class=\"glyphicon glyphicon-trash\" onclick=\"delete2(this)\"></i> ";
        template += (parseInt($(orderdom).text()) - 1).toString();
        template += "<i class=\"glyphicon glyphicon-collapse-up\" onclick=\"up2(this)\"></i>";
        template += "<i class=\"glyphicon glyphicon-collapse-down \" onclick=\"down2(this)\"></i>";
        $(orderdom).html(template);
        $(dom).next().after(dom);
    };
};
var calculate = function() {
    var doms = $("#newparameter").children();
    var length = doms.length - $("#newparameter .emptytable").length;
    var amount = 0;
    for (var i = 0; i < length; i++) {
        amount += parseInt($($(doms[i]).children()[4]).html());
    };
    $("input[name='static']").val(amount);
}