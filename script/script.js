
// using jquery

// $('#view-all-btn')?.on('click',viewMore);

// let [posts] = $('#posts');

// //due ton hoisting this func move upward before where we use

// let viewed = false;
// function viewMore(event) { 
//     //api call to get data
    


//     if(viewed){
//         viewed=false;
//         destroyCreatedPosts();
//         $('#view-all-btn i').removeClass("fa-arrow-left");
//         $('#view-all-btn i').addClass("fa-arrow-right");
//     }else{
//         viewed=true;
//          createPosts();
//          $('#view-all-btn i').removeClass("fa-arrow-right");
//          $('#view-all-btn i').addClass("fa-arrow-left");

//     }

// }
//  function createPosts() {

//     //viewed-all class added to destroy all create element that we created on clicking view all,now by click on view less/view all (again) we can destroy these.

//     for(let i=0;i<5;i++){
//         let abc = $('<article class="post-items viewed-all"><h2 class="post-heading" >Making a design system from scratch</h2><p class="post-time-and-title">12 Feb 2020 <span class="separator">|</span> Design Pattern</p><p class="post-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus quibusdam tempore fuga. Ipsam nam veritatis dignissimos accusantium exercitationem ipsa sed illo et aliquam? Sed est nemo libero deserunt reprehenderit.</p></article>');
        
//         $('#posts').append(abc);
        
        
//     } 
//     let a = $('<a href="#recent-posts" id="view-less-btn" class="viewed-all">View less <i class="fa fa-arrow-left"></i></a>');
//     $('#posts').append(a);

//     //listener to this added element
//     $('#view-less-btn').on('click',viewMore);
    
// }
// function destroyCreatedPosts(){
//     $('.viewed-all').remove();
  
// }



// ** try in vanilla JS
//fetch element from DOM using Browser DOM API
const viewAll = document.getElementById('view-all-btn');
const arrow = document.querySelector('#view-all-btn i');
const posts = document.getElementById('posts');

const viewLess = document.createElement('a');
viewLess.innerHTML='view Less <i class="fa fa-arrow-left">';
//set attribute can't set multiple value at same time,2 args required
/*1. use setAttribute func again again 
// viewLess.setAttribute('id',"view-less-btn");
// viewLess.setAttribute("class","viewed-all");
// viewLess.setAttribute("href","#recent-posts");
*/
//2. func create that do task for us to setAttribute like in jquery
function setAttributes(element,objectAttributes) { // objA = {key:value,}
    for (const key in objectAttributes) {
        console.log(key,':',objectAttributes[key]);
        element.setAttribute(key,objectAttributes[key])
    }
}
setAttributes(viewLess,{
    id:"view-less-btn",
    class:"viewed-all",
    href:"#recent-posts"
});


viewLess.onclick=vMore;
viewAll.onclick=vMore;
let v=false;
function vMore(e) {

    if(v){
        v=false;//unview
        destroyCP();

        arrow.classList.remove('fa-arrow-left');
        arrow.classList.add('fa-arrow-right');
    }else{
        v=true;
        cPosts();
        arrow.classList.remove('fa-arrow-right');
        arrow.classList.add('fa-arrow-left');
    }
}

function cPosts(e) {

    for (let i = 0; i < 5; i++) {
        const element = document.createElement('article')
        element.innerHTML='<h2 class="post-heading" >Making a design system from scratch</h2><p class="post-time-and-title">12 Feb 2020 <span class="separator">|</span> Design Pattern</p><p class="post-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus quibusdam tempore fuga. Ipsam nam veritatis dignissimos accusantium exercitationem ipsa sed illo et aliquam? Sed est nemo libero deserunt reprehenderit.</p>';
        element.setAttribute('class',`post-items viewed-all ${i}`);

        posts.append(element);

        
    }
    posts.appendChild(viewLess);
}

function destroyCP(e) {

    const viewed_all_created_element = document.getElementsByClassName('viewed-all');
    // for (let i = 0; i < viewed_all_created_element.length; i++) {
        
        
    // }

    while(viewed_all_created_element.length!==0){
        console.log(viewed_all_created_element.length);
        let element = viewed_all_created_element[0];
        console.log('before remove',element)
        element.remove();//array size change
        console.log('after remove',element)
    }
    viewLess.remove();
}