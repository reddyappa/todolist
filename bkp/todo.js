// JavaScript Document

var app = angular.module('myApp', []); 

app.controller("todoCtrl",function($scope){
	$scope.todoList=[{todoText:'Clean House', done:false}];
	$scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };
	
	$scope.remove = function() {
		$scope.todoList = [];
    };
	
	
	
	})