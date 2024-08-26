

var tl= gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    markers:true, 
}})

tl.to("#fanta",{
    top:"125%",
    left:"5%"
},'orange')
tl.to("#orange1 ",{
    top:"160%",
    left:"27%"
},'orange')
tl.to("#orange2 ",{
    top:"163%",
    right:"5%"
},'orange')
tl.to("#leaf ",{
    top:"104%",
    rotate:"260deg",
    left:"80%"
},'orange')
tl.to("#leaf2 ",{
    top:"104%",
    rotate:"260deg",
    left:"10%"
},'orange')

var tl2= gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    markers:true, 
}})
tl2.from(".lemon",{
    rotate:"90deg",
    left:"-50%",
    top:"20%"
},'ca')
tl2.from("#coc",{
    rotate:"-90deg",
    left:"-50%",
    top:"110%"
},'ca')
tl2.from(".lemon1",{
    rotate:"90deg",
    left:"100%",
    top:"110%"
},'ca')
tl2.from("#pepsi",{
    rotate:"90deg",
    left:"50%",
    top:"110%"
},'ca')
tl2.to("#orange",{
   
    left:"50%",
    top:"220%"
},'ca')
tl2.to("#fanta",{
    width:"35%",
    left:"32%",
    top:"215%"
},'ca')
tl2.from(".lemon2",{
    rotate:"90deg",
    left:"100%",
    top:"110%"
},'ca')

