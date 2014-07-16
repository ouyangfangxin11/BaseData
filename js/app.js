var BaseApp = angular.module('BaseApp', ["ngRoute"]);

BaseApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/dashboard', {
                templateUrl: 'template/index.html',
                controller: 'indexCtr'
            })
            .when('/protocol', {
                templateUrl: 'template/protocol.html',
            })
            .when('/model', {
                templateUrl: 'template/model_look.html',
                //controller: 'modelCtr',
            })
            .when('/model/add', {
                templateUrl: 'template/model_add.html',
                controller: 'modeladdCtr',
            })
            .when('/model/reset', {
                templateUrl: 'template/model_add.html',
            })
            .when('/scheme', {
                templateUrl: 'template/scheme.html',
            })
            .when('/equipment', {
                templateUrl: 'template/equipment.html',
            })
            .when('/series', {
                templateUrl: 'template/series_look.html',
            })
            .when('/series/add', {
                templateUrl: 'template/series_add.html',
            })
            .when('/iofile', {
                templateUrl: 'template/iofile.html',
            })
            .when('/parameter', {
                templateUrl: 'template/parameter_look.html',
                controller: 'parameterlookCtr',
            })
            .when('/parameter/add', {
                templateUrl: 'template/parameter_add.html',
                controller: 'parameteraddCtr',
            })
            .when('/parameter/add/:id', {
                templateUrl: 'template/parameter_add.html',
                controller: 'parameteraddCtr',
            })
            .when('/parameter/reset', {
                redirectTo: '/parameter/add'
            })
            .otherwise({
                redirectTo: '/dashboard'
            });
    }
]);

BaseApp.controller('indexCtr', function($scope) {
    if (!window.Highcharts) {
        highcharts();
    };
    exporting(Highcharts);
    highchartdata();
});

BaseApp.controller('parameteraddCtr', function($scope) {
    $scope.schemes = [{
        'num': 1,
        'name': 'name1',
        'parameter': 'parameter1',
        'classname': 'classname1',
        'type': 'type1'
    }, {
        'num': 2,
        'name': 'name2',
        'parameter': 'parameter2',
        'classname': 'classname2',
        'type': 'type2'
    }, {
        'num': 3,
        'name': 'name3',
        'parameter': 'parameter3',
        'classname': 'classname3',
        'type': 'type3'
    }, {
        'num': 4,
        'name': 'name4',
        'parameter': 'parameter4',
        'classname': 'classname4',
        'type': 'type4'
    }, {
        'num': 5,
        'name': 'name5',
        'parameter': 'parameter5',
        'classname': 'classname5',
        'type': 'type5'
    }, {
        'num': 6,
        'name': 'name6',
        'parameter': 'parameter6',
        'classname': 'classname6',
        'type': 'type6'
    }, {
        'num': 1,
        'name': 'name1',
        'parameter': 'parameter1',
        'classname': 'classname1',
        'type': 'type1'
    }, {
        'num': 2,
        'name': 'name2',
        'parameter': 'parameter2',
        'classname': 'classname2',
        'type': 'type2'
    }, {
        'num': 3,
        'name': 'name3',
        'parameter': 'parameter3',
        'classname': 'classname3',
        'type': 'type3'
    }, {
        'num': 4,
        'name': 'name4',
        'parameter': 'parameter4',
        'classname': 'classname4',
        'type': 'type4'
    }, {
        'num': 5,
        'name': 'name5',
        'parameter': 'parameter5',
        'classname': 'classname5',
        'type': 'type5'
    }, {
        'num': 6,
        'name': 'name6',
        'parameter': 'parameter6',
        'classname': 'classname6',
        'type': 'type6'
    }, {
        'num': 1,
        'name': 'name1',
        'parameter': 'parameter1',
        'classname': 'classname1',
        'type': 'type1'
    }, {
        'num': 2,
        'name': 'name2',
        'parameter': 'parameter2',
        'classname': 'classname2',
        'type': 'type2'
    }, {
        'num': 3,
        'name': 'name3',
        'parameter': 'parameter3',
        'classname': 'classname3',
        'type': 'type3'
    }, {
        'num': 4,
        'name': 'name4',
        'parameter': 'parameter4',
        'classname': 'classname4',
        'type': 'type4'
    }, {
        'num': 5,
        'name': 'name5',
        'parameter': 'parameter5',
        'classname': 'classname5',
        'type': 'type5'
    }, {
        'num': 6,
        'name': 'name6',
        'parameter': 'parameter6',
        'classname': 'classname6',
        'type': 'type6'
    }];
    if (20 - $scope.schemes.length > 0) {
        $scope.emptyschemes = new Array(20 - $scope.schemes.length);
        for (var i = $scope.emptyschemes.length - 1; i >= 0; i--) {
            $scope.emptyschemes[i] = i;
        };
    };

    $scope.check = function(dom) {
        if (dom.checked) {
            $(dom).parent().find("i").addClass("glyphicon glyphicon-ok");
        } else {
            $(dom).parent().find("i").removeClass("glyphicon glyphicon-ok");
        }
    };
    $scope.checkall = function(dom) {
        if (dom.checked) {
            $(".checkbox input").parent().find("i").addClass("glyphicon glyphicon-ok");
        } else {
            $(".checkbox input").parent().find("i").removeClass("glyphicon glyphicon-ok");
        }
    };
    $scope.add = function() {
        var doms = $("tbody .glyphicon.glyphicon-ok").parents("tr");
        var oldlength = $('#oldmodel').find('tr').length;
        var newlength = $('.emptytable').length;
        var length = $("#newmodel").children().length - newlength;
        var template = "<tr><td><label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox-inline\" disabled='disabled'></label></td><td></td><td></td><td></td><td></td><td></td><td class=\"hidden\"></td></tr>";
        $("tbody .glyphicon.glyphicon-ok").parents("tr").remove();
        for (var i = doms.length - 1; i >= 0; i--) {
            length++;
            $($(doms[i]).find("td")[0]).html(length.toString());
            $(doms[i]).find("td").removeClass('hidden');
            if (newlength > 0) {
                newlength--;
                $($('.emptytable')[0]).html($(doms[i]).html());
                $($('.emptytable')[0]).removeClass('emptytable');
            } else {
                $("#newmodel").append(doms[i]);
            }
            oldlength--;
            if (oldlength < 20) {
                $("#oldmodel").append(template);
            };
        }
    };
});

BaseApp.controller('parameterlookCtr', function($scope) {
    $scope.parameters = [{
        'type': 'type1',
        'condition': 'condition1',
        'num': 'num1',
        'name': 'name1',
        'length': 'length1',
        'max': 'max1',
        'min': 'min1',
        'unit': 'unit1'
    }, {
        'type': 'type2',
        'condition': 'condition2',
        'num': 'num2',
        'name': 'name2',
        'length': 'length2',
        'max': 'max2',
        'min': 'min2',
        'unit': 'unit2'
    }, {
        'type': 'type3',
        'condition': 'condition3',
        'num': 'num3',
        'name': 'name3',
        'length': 'length3',
        'max': 'max3',
        'min': 'min3',
        'unit': 'unit3'
    }, {
        'type': 'type4',
        'condition': 'condition4',
        'num': 'num4',
        'name': 'name4',
        'length': 'length4',
        'max': 'max4',
        'min': 'min4',
        'unit': 'unit4'
    }, {
        'type': 'type5',
        'condition': 'condition5',
        'num': 'num5',
        'name': 'name5',
        'length': 'length5',
        'max': 'max5',
        'min': 'min5',
        'unit': 'unit5'
    }, {
        'type': 'type1',
        'condition': 'condition1',
        'num': 'num1',
        'name': 'name1',
        'length': 'length1',
        'max': 'max1',
        'min': 'min1',
        'unit': 'unit1'
    }, {
        'type': 'type2',
        'condition': 'condition2',
        'num': 'num2',
        'name': 'name2',
        'length': 'length2',
        'max': 'max2',
        'min': 'min2',
        'unit': 'unit2'
    }, {
        'type': 'type3',
        'condition': 'condition3',
        'num': 'num3',
        'name': 'name3',
        'length': 'length3',
        'max': 'max3',
        'min': 'min3',
        'unit': 'unit3'
    }, {
        'type': 'type4',
        'condition': 'condition4',
        'num': 'num4',
        'name': 'name4',
        'length': 'length4',
        'max': 'max4',
        'min': 'min4',
        'unit': 'unit4'
    }, {
        'type': 'type5',
        'condition': 'condition5',
        'num': 'num5',
        'name': 'name5',
        'length': 'length5',
        'max': 'max5',
        'min': 'min5',
        'unit': 'unit5'
    }];
    $scope.delete = function(dom) {
        $(dom).parent().parent().remove();
    };
    $scope.update = function(id) {
        window.location.href = "#/parameter/add/" + id;
    }
});

BaseApp.controller('modeladdCtr', function($scope) {
    $scope.parameters = [{
        'num': 'num1',
        'name': 'name1',
        'type': 'type1',
        'length': '1'
    }, {
        'num': 'num2',
        'name': 'name2',
        'type': 'type2',
        'length': '2'
    }, {
        'num': 'num3',
        'name': 'name3',
        'type': 'type3',
        'length': '3'
    }, {
        'num': 'num4',
        'name': 'name4',
        'type': 'type4',
        'length': '4'
    }, {
        'num': 'num5',
        'name': 'name5',
        'type': 'type5',
        'length': '5'
    }, {
        'num': 'num6',
        'name': 'name1',
        'type': 'type1',
        'length': 'length1'
    }, {
        'num': 'num7',
        'name': 'name2',
        'type': 'type2',
        'length': 'length2'
    }, {
        'num': 'num8',
        'name': 'name3',
        'type': 'type3',
        'length': 'length3'
    }, {
        'num': 'num9',
        'name': 'name4',
        'type': 'type4',
        'length': 'length4'
    }, {
        'num': 'num10',
        'name': 'name5',
        'type': 'type5',
        'length': 'length5'
    }];
    $scope.schemes = [{
        'num': 'num11',
        'type': 'type1',
        'name': 'name1',
        'parameter': 'parameter1'
    }, {
        'num': 'num21',
        'type': 'type2',
        'name': 'name2',
        'parameter': 'parameter2'
    }, {
        'num': 'num31',
        'type': 'type3',
        'name': 'name3',
        'parameter': 'parameter3'
    }, {
        'num': 'num41',
        'type': 'type4',
        'name': 'name4',
        'parameter': 'parameter4'
    }, {
        'num': 'num51',
        'type': 'type1',
        'name': 'name1',
        'parameter': 'parameter1'
    }, {
        'num': 'num61',
        'type': 'type2',
        'name': 'name2',
        'parameter': 'parameter2'
    }, {
        'num': 'num71',
        'type': 'type3',
        'name': 'name3',
        'parameter': 'parameter3'
    }, {
        'num': 'num81',
        'type': 'type4',
        'name': 'name4',
        'parameter': 'parameter4'
    }];
    $scope.check = function(dom) {
        if (dom.checked) {
            $(dom).parent().find("i").addClass("glyphicon glyphicon-ok");
        } else {
            $(dom).parent().find("i").removeClass("glyphicon glyphicon-ok");
        }
    };
    $scope.checkall = function(dom) {
        if (dom.checked) {
            $(dom).parents('table').find("i").addClass("glyphicon glyphicon-ok");
        } else {
            $(dom).parents('table').find("i").removeClass("glyphicon glyphicon-ok");
        }
    };
    $scope.add1 = function() {
        var doms = $("#oldparameter .glyphicon.glyphicon-ok").parents("tr");
        var newlength = $('#newparameter .emptytable').length;
        var length = $("#newparameter").children().length - newlength;
        $("#oldparameter .glyphicon.glyphicon-ok").parents("tr").remove();
        for (var i = doms.length - 1; i >= 0; i--) {
            length++;
            $($(doms[i]).find("td")[0]).html(length.toString());
            if (newlength > 0) {
                newlength--;
                $($('#newparameter .emptytable')[0]).html($(doms[i]).html());
                $($('#newparameter .emptytable')[0]).removeClass('emptytable');
            } else {
                $("#newparameter").append(doms[i]);
            }
        }
    };
    $scope.add2 = function() {
        var doms = $("#oldscheme .glyphicon.glyphicon-ok").parents("tr");
        var newlength = $('#newscheme .emptytable').length;
        var length = $("#newscheme").children().length - newlength;
        $("#oldscheme .glyphicon.glyphicon-ok").parents("tr").remove();
        for (var i = doms.length - 1; i >= 0; i--) {
            length++;
            $($(doms[i]).find("td")[0]).html(length.toString());
            $(doms[i]).find("td").removeClass('hidden');
            if (newlength > 0) {
                newlength--;
                $($('#newscheme .emptytable')[0]).html($(doms[i]).html());
                $($('#newscheme .emptytable')[0]).removeClass('emptytable');
            } else {
                $("#newscheme").append(doms[i]);
            }
        }
    };
});