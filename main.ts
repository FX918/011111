function 左轉 () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
}
function 右轉 () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
}
function 後退 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
}
function 直線 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
}
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        右轉()
        basic.pause(1000)
        直線()
        basic.pause(1000)
        左轉()
        basic.pause(1000)
        直線()
    }
})
