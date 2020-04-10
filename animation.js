var playButton = $("#playButton");


var tl = gsap.timeline ({paused:false});
tl.addLabel ("delayTime", "+=1")

tl.from (".avatar", {duration: 1, scale:0 , ease:"expo.out", opacity:1}, ".5")
  tl.from (".torso", {duration: .6, y: 410, ease:"back", opacity:1}, "delayTime+=0.03")
  tl.from ("#head", {duration: .6, y: 410, ease:"back", opacity:1}, "delayTime+=0.05")
  tl.from (".eyes", {duration: .6, y: 410, ease:"back", opacity:1}, "delayTime+=0.06")
  tl.from ("#eyeglasses", {duration:  .6, y: 410, ease:"back", opacity:1}, "delayTime+=0.07")

  tl.from ("#nose, #mouth", {duration:  .6, y: 410, ease:"back", opacity:1}, "delayTime+=0.08")
  tl.from ("#hair", {duration: .6, y: 410, ease:"back", opacity:1}, "delayTime+=0.1")
  tl.from ("#bangs", {duration: .6, y: 410, ease:"back", opacity:1}, "delayTime+=.08")
