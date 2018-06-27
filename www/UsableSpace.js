var exec = require('cordova/exec');

var UsableSpace = {
    getUsableSpace : function(success, fail) {
        exec(success, fail, "UsableSpace", "getUsableSpace");
    }
};
 module.exports = UsableSpace;
