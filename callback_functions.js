function birinci(callback){
    setTimeout(function () {
        console.log("birinci");
        callback(ucuncu);
    },2000);
}

function ikinci(callback) {
    setTimeout(function () {
        console.log("ikinci");
        callback();
    },3000);

}

function ucuncu() {
    console.log("ucuncu");
}

birinci(ikinci);
