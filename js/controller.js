var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {

  $scope.$var = {

    id: null,
    comments: null,
    status: 'Esperando..',
    data: []


  }  
  


  $scope.$GUI = {
      servicio:()=>{
        $http({
            method : "PATCH",
            url : "https://uniminuto-dev-ed.my.salesforce.com/services/data/v49.0/sobjects/CSAI__c/" + $scope.$var.id,
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer 00D4W000008Gr35!AQUAQH2CZajBcRH_V0Yg2zBai6giBNN53gM_bZ53k9f74LiU9ylb1KmkVXpkoChIOY3uflo1dRqLYtBSr30vh24TaFF8rEtH"
            },
            data: { 
                Historial__c: $scope.$var.comments,
            }
          }).then(response => {
                $scope.$var.status = 'Cargado correctamente';
          },response => {
                $scope.$var.status = 'Error al cargar';
          });
        
      },
      tarjetas:()=>{
        $http({
            method : "GET",
            url : "https://csai.000webhostapp.com/db.php"
          }).then(response => {
                $scope.$var.data = response.data;
          },response => {
                $scope.$var.status = 'Error al cargar Json';
          });
      }
  }

  $scope.$GUI.tarjetas();

});