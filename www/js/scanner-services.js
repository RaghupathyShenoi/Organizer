/**
 * Created by elhogeorge on 5/7/2014.
 */

angular.module('scanner.services', [])

    .factory('Scanners', function() {
        return {
            all: function() {

                return [
                    {
                        name : 'CT',
                        host : '192.168.0.1',
                        port : '8903'
                    }
                ];
            },
            add: function(scanner) {

            },
            delete: function(scanner) {

            },
            update: function(scanner) {

            }
        }
    })
