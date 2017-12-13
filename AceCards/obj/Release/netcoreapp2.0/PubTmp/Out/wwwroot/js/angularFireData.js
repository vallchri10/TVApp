﻿(function () {
    var app = angular.module('app', ['firebase']);

    //Here will check to see if the computer is connected to the internet (WiFi).
    //If the computer is connected we will return true else
    // return false and show it to the user.
    app.run(function ($window, $rootScope) {
        $rootScope.online = navigator.onLine;
        $window.addEventListener("offline", function () {
            $rootScope.$apply(function () {
                $rootScope.online = false;
            });
        }, false);

        $window.addEventListener("online", function () {
            $rootScope.$apply(function () {
                $rootScope.online = true;
            });
        }, false);
    });
    //////////////////////////////////////////////////////////////////
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDr1MKTlGOEsBRrmjW4DFWX81t-1SiIy1I",
        authDomain: "chris-project-fd2f7.firebaseapp.com",
        databaseURL: "https://chris-project-fd2f7.firebaseio.com",
        projectId: "chris-project-fd2f7",
        storageBucket: "chris-project-fd2f7.appspot.com",
        messagingSenderId: "192604718135"
    };
    firebase.initializeApp(config);

    ///////////////////////////////////////////////////////////////// 
    app.controller('DataCtrl', function ($scope, $firebaseArray, $firebaseObject) {

        var data = firebase.database().ref().child('Angular');

        var syncObject = $firebaseObject(data);
        syncObject.$bindTo($scope, "data");

    });
}());