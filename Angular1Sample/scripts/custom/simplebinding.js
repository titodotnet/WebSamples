/// <reference path="../angular.js" />


var app = angular
    .module("simplebindingmodule", [])
    .controller("simplebindingcontroller", function ($scope) {
        var employee = {
            firstName: "emp1 first name",
            lastName: "emp1 last name",
            gender: "Male"

        };

        $scope.employee = employee;

    });