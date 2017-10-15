var classList = [];


//////////// Add New Student Key and Mouse

$("#add").on("click", function () {
    addNew();
});

$('input').keypress(function (e) { 
    var key = e.which;
    if(e.which == 13) {// the enter key code
        addNew();
    }
});


//////////// Next Student Button

$("#next").on("click", function () {
    var random = [Math.floor(Math.random()*classList.length)];
    var randomItem = classList[random];
    $("p").last().remove();
    $("div .picked").append('<p>' + randomItem + '</p>')
    
    //Remove Item From Array
    classList.splice(random,1);
    //Remove List Item
    $(".studentList li").eq(random).remove();
    $(".picked").show();  
})


//////////// Remove Student Button

$("ul").on("click", "span", function (event) {
    // Fade HTML Item from Page
    $(this).parent().fadeOut(500, function () {
    $(this).remove();
    });
    // Splice Item from Array
    var item = $(this).parent().index()
    classList.splice(item,1); 
})

$(".picked").on("click", "button", function(){
    $(".picked").hide();
})


//////////// Add New Student Button

function addNew () {
    var name = $("input").val();
    $("ul").append('<li><span><i class="fa fa-trash-o"></i></span>' + name + "</li>");
    $("input").val("");
    classList.push(name);
}