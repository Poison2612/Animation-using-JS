
var crsr = document.querySelector("#crsr");
var main = document.querySelector('#main');

main,addEventListener("mousemove", function(dets){
    crsr.style.top = dets.y + "px";
    crsr.style.left = dets.x + "px";
    
});



var textTl = gsap.timeline();

textTl
.from("#fourth", {
    onStart: function () {
        $('#fourth').textillate({ in: { effect: 'fadeInUp', sync: true,
        callback:function(){
        $('#fourth').textillate('out')
    }
 },
     out: { effect: 'fadeOutUp', sync: true,}                            
    });
    }
})
.from("#third", {
    opacity: 0,
    delay: "0.8",
    onStart: function () {
        $('#third').textillate({ in: { effect: 'fadeInUp', sync: true,
        callback:function(){
        $('#third').textillate('out')
    }
 },
     out: { effect: 'fadeOutUp', sync: true}                            
    });
    }
})
.from("#second", {
    opacity: 0,
    delay: "0.8",
    onStart: function () {
        $('#second').textillate({ in: { effect: 'fadeInUp', sync: true,
        callback:function(){
        $('#second').textillate('out')
    }
 },
     out: { effect: 'fadeOutUp', sync: true}                            
    });
    }
})
.from("#top", {
    opacity: 0,
    delay: "0.8",
    onStart: function () {
        $('#top').textillate({ in: {
             effect: 'fadeInUp',sync: true,
            callback:function(){
        $('#top').textillate('out')
    }
 },
     out: { effect: 'fadeOutUp', sync: true,}                            
    });
    }
})
.to("#top-box",{
    ease: Bounce.easeOut,
    top: "-100%",
    delay: 1,
    duration: 1.2
})

.from("nav",{
    opacity: 0,
    y : 20,
})
.from("#sec-mid h1",{
    opacity: 0,
    scale: 1.3,
    duration: 1
})
.from("#sec-mid button",{
    y: 20,
    opacity: 0,
})
.from(["#i-1", "#i-2"],{
    x : -60,
    scale: 1.3,
    opacity: 0,
    duration : 1
})
.from(["#i-3","#i-4"],{
    x :60,
    scale: 1.3,
    opacity:0,
    duration: 1,
    delay: "-1"  
})
.from("#sec-mid #down",{
    scale: 0.1,
    opacity: 0
})
.to("#sec-mid #down",{
    y: 20,
    yoyo: true,
    repeat: -1
})


function rinki(){
    document.querySelector("#rinki").style.opacity = 1;
    gsap.from(["#rinki"],{
        y :100,
        scale: 1.3,
        opacity:0,
        duration: 1,
        delay: "-1"  
    })
}