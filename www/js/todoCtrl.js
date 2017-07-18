angular.module('myTodos').controller("todoCtrl",function($scope){
  $scope.todos = [];
  $scope.input = {};
  $scope.pushTodo = function(todoBox){
    if(todoBox){
      $scope.todos.push(todoBox);
      console.log(todoBox);
      $scope.input.todoBox = "";
    }
  }
  $scope.removeTodo = function(index){
    $scope.todos.splice(index,1);
  }


})
