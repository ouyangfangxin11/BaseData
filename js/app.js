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
                templateUrl: 'template/model.html',
                controller: 'modelCtr',
            })
            .when('/scheme', {
                templateUrl: 'template/scheme.html',
                
            })
            .when('/parameter', {
                templateUrl: 'template/model.html',
                controller: 'parameterCtr',
            })
            .when('/parameter/reset', {
                redirectTo: '/parameter'
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
BaseApp.controller('parameterCtr', function($scope) {
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
    $scope.changeParameter = function() {
        alert($(this).value());
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