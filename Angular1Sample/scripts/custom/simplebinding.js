/// <reference path="../angular.min.js" />
var app = angular
    .module("sbmodule", [])
    .controller("sbcontroller", function ($scope) {
        var employee = {
            firstName: "emp1 first name",
            lastName: "emp1 last name",
            gender: "Male"
        };

        $scope.employee = employee;
    });