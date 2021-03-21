function 左轉 () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
}
function 右轉 () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
}
input.onButtonPressed(Button.A, function () {
    右轉()
    basic.showIcon(IconNames.Scissors)
})
function 後退 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
}
input.onButtonPressed(Button.AB, function () {
    後退()
    basic.showIcon(IconNames.Tortoise)
})
input.onButtonPressed(Button.B, function () {
    左轉()
    basic.showIcon(IconNames.House)
})
function 直線 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
}
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        右轉()
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
        直線()
        basic.showIcon(IconNames.StickFigure)
        basic.pause(1000)
        左轉()
        basic.showIcon(IconNames.Yes)
        直線()
        basic.pause(1000)
    }
})
