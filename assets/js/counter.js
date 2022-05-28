let count = 0; // Shared state that both functions can see
let count1 = 0;
let count3 = 0;
let count4 = 0;
let count5= 0;
let count6 =0;

$("#add").click(function (){
    count++;
    $("#time").text(count);
});

$(".reduce").click(function(){ 
    count--;
    $("#time").text(count);
});


$("#add1").click(function (){
    count1++;
    $("#time1").text(count1);
});

$(".reduce1").click(function(){ 
    count1--;
    $("#time1").text(count1);
});


$("#add3").click(function (){
    count3++;
    $("#time3").text(count3);
});

$(".reduce3").click(function(){ 
    count3--;
    $("#time3").text(count3);
});


$("#add4").click(function (){
    count4++;
    $("#time4").text(count4);
});

$(".reduce4").click(function(){ 
    count4--;
    $("#time4").text(count4);
});


$("#add5").click(function (){
    count5++;
    $("#time5").text(count5);
});

$(".reduce5").click(function(){ 
    count5--;
    $("#time5").text(count5);
});

$("#add6").click(function (){
    count6++;
    $("#time6").text(count6);
});

$(".reduce6").click(function(){ 
    count6--;
    $("#time6").text(count6);
});


// let count = 0;
// $('.likes').click(function(){
// var $this = $(this);
//     $span = $this.prev('span'),
//     $parent = $span.closest('div'),
//     newValue = parseInt($input.val())+1;
//     $parent.find('.inc').addClass('a'+newValue);
//     $span.val(newValue);
//     count+=newValue;


// });

// $('.dislikes').click(function(){
// var $this = $(this);
//     $span = $this.prev('span'),
//     $parent = $span.closest('div'),
//     newValue = parseInt($input.val())-1;
//     console.log($parent);
//     $parent.find('.inc').addClass('a'+newValue);
//     $span.val(newValue);
//     count+=newValue;


// });