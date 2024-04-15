var result = (function() {
    var x = 10;
    
    function double() {
        return x * 2;
    }
    
    return double();
})();

console.log(result);