// hamburg / navbar
let navbarOpen = false;
$('#hamburg a').click(function (e) { 
    e.preventDefault();

    if(navbarOpen){
        navbarOpen=false;
        $('.navbar ul').css('display','none');
        return;
    }else{
    $('.navbar ul').css({ 
        width: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        padding: "30px 0px"
        });
        navbarOpen=true;
    }

   
});

// window.click((function () { 
//     if( $('.hidden').css('display')==="none"){
//      console.log("resize");
//      $('.navbar ul').css({
//          display: "flex",
//          flexDirection: "row",
//          });
//     }
//  }), 100);














