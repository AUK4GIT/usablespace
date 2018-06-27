var exec = require('cordova/exec');

exports.getUsableSpace = function(success, fail) {
    exec(success, fail, "UsableSpace", "getUsableSpace");
};
