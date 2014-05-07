/**
 * Created by elhogeorge on 5/7/2014.
 */

angular.module('home.controllers', [])

    .controller('HomeCtrl', function($scope, $ionicModal, Scanners) {

        $scope.scanners = Scanners.all();

        $ionicModal.fromTemplateUrl('add-scanner.html', function(modal) {
                $scope.addScannerView = modal;
            },
            {
                focusFirstInput: false,
                scope: $scope
            });

        $scope.createScanner = function(scanner)  {
            
            $scope.scanners.push(scanner);
            $scope.closeNewScanner();
        };

        $scope.deleteScanner = function(scanner)  {

        };

        $scope.newScanner = function() {
            $scope.addScannerView.show();
        };

        $scope.closeNewScanner = function() {
            $scope.addScannerView.hide();
        };
    })