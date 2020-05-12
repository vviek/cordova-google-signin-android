cordova.addConstructor(function() {
    function GoogleSignin() {

    }

    GoogleSignin.prototype.login = function(options, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "GoogleSignin", "glogin", [options]);
    };

    GoogleSignin.prototype.logout = function(successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "GoogleSignin", "logout", []);
    };

    window.GoogleSignin = new GoogleSignin()
    return window.GoogleSignin
});
