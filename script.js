
var clutter = "";
document.querySelector("#page1 h1").textContent.split("").forEach(function(elem){
   clutter += `<span>${elem}</span>`
})
document.querySelector("#page1 h1").innerHTML = clutter

var clutter1 = "";
document.querySelector("#page2 h1").textContent.split("").forEach(function(elem){
   clutter1 += `<span>${elem}</span>`
})
document.querySelector("#page2 h1").innerHTML = clutter1
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#main",
        pin:true,
        scrub:.8,
        start:"0% 0%",
        snap:true,
        end:"200% 0%"
    }
})

tl
.to("#i2",{
    right:"25%",
    duration:1

},"b")

.to("#i3",{
left:"25%",
duration:1.5

},"b")

.to("#box1",{
    y:"-50vh",
    opacity:0,
    duration:1.5
},"a")

.to("#page1 h1 span",{
opacity:0,
y:"-30px",
stagger:.2
},"a")

.to("#page2",{
    top:"0%"
})

.from("#box2",{
    y:"50vh",
    duration:2
})

.from("#page2 h1 span",{
    opacity:0,
    stagger:.3,
    y:"30px"
})

.from("#i5",{
    right:"25%",
    duration:2

},"pg2")

.from("#i6",{
    left:"25%",
    duration:2

},"pg2")


document.addEventListener("mousemove",function(dets){
    // console.log(dets);
    // document.querySelector("#cursor").style.top = `${dets.clientY}px`
    // document.querySelector("#cursor").style.left = `${dets.clientX}px`
    gsap.to("#cursor",{
        top:`${dets.clientY}px`,
        left:`${dets.clientX}px`
    })
    // var dim = document.querySelector("#box1").getBoundingClientRect()

    // console.log(dim);
})

