// SCROLL

$(window).on("scroll",function(){
    var changeColor = $(window).scrollTop();
    if(changeColor > 0){
$(".navbar").css("background","rgba(0,0,0)");
    }
    else{
    $(".navbar").css("background","rgba(250,250,250,0)");    
        }
      });

// TOOLTIP
var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})