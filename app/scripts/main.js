(function(){

    var data = $("button").data(data)
    var box = $("#box");
    var button = $("button");

    button.on("click", function(){
        box.removeClass().addClass(data);
    });

}());