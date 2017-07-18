angular.module('myTodos').controller("todoCtrl",function($scope){
  $scope.todos = [];
  $scope.pushTodo = function(todoBox){
    $scope.todos.push(todoBox);
    console.log($scope.todos);
  }
})
