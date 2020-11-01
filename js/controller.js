var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {

  $scope.$var = {

    id: null,
    comments: null,
    status: 'Esperando..'


  }  


  $scope.$GUI = {
      servicio:()=>{
        $http({
            method : "PATCH",
            url : "https://uniminuto-dev-ed.my.salesforce.com/services/data/v49.0/sobjects/CSAI__c/" + $scope.$var.id,
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer 00D4W000008Gr35!AQUAQCXKsmPsinsdRDrmGNajo2AOSUfX5Z1ixbvj8KV1KkttGhIkdR4olZepWUT48P4DFFHQo9F_vvpK58d4slrJAMrFpSDa"
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
                $scope.$var.status = 'Cargado correctamente';
          },response => {
                $scope.$var.status = 'Error al cargar';
          });
      }
  }

  $scope.$GUI.tarjetas();

});