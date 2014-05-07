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

            var newItem = {
                name : scanner.name,
                host : scanner.host,
                port : scanner.port
            };

            if(!newItem.name || !newItem.host || !newItem.port)
            {
                return;
            }

            for(var i=0;i<$scope.scanners.length;i++)
            {
                if($scope.scanners[i].name == newItem.name)
                {
                    return;
                }
            }

            $scope.scanners.push(newItem);
            $scope.closeNewScanner();

            scanner.name = '';
            scanner.host = '';
            scanner.port = '';
        };

        $scope.deleteScanner = function(scanner)  {

            var indexToDelete = -1;
            for(var i=0;i<$scope.scanners.length;i++)
            {
                if($scope.scanners[i].name == scanner.name)
                {
                    indexToDelete = i;
                    break;
                }
            }

            if(indexToDelete != -1)
            {
                $scope.scanners.splice(indexToDelete, 1);
            }

        };

        $scope.newScanner = function() {
            $scope.addScannerView.show();
        };

        $scope.closeNewScanner = function() {
            $scope.addScannerView.hide();
        };
    })