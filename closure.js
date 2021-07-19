function x(){
    var a = 10;
    function y(){
        var b = 7;
        function z(){
            console.log(a,b);
        }
        z();
    }
    y();
}
x();