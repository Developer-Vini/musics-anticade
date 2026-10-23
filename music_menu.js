setcps(0.4)

$: stack(
  s("bd ~~ bd ~~ bd ~").bank("RolandTR808").gain(.9),
  s("~ ~ sd ~ ~ ~ sd ~").bank("RolandTR808").gain(.6).room(.3),
  s("hh*8").bank("RolandTR808").gain(.25).swingBy(1/3 ,4),
  s("~ ~ ~ ~ ~ oh  ~ ~ ").bank("RolandTR808").gain(.2)
)
  $: n("<[0, 2, 4, 6] [-1, 1, 2, 5] [-2, 0, 2, 4][-3, -1, 1, 3]>")
     .scale("C4:major")
     .s("gm_acoustic_guitar_nylon")
     .lpf(1800)
     .room(.5)
     .gain(.5)
     .slow(2)

$: n("<0 -1 -2 -3>*4")
   .scale("C2:major")
   .s("sawtooth")
   .lpf(300)
   .gain(.5)
   .struct("x ~ x x ~ x ~ x")

$: n("0 2 4 ~ 7 ~ 4 2 | 4 ~ 5 4 2 ~ 0 ~")
   .scale("C5:major")
   .s("gm_vibraphone")
   .delay(.4).delaytime(.375).delayfeedback(.4)
