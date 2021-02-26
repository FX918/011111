def 左轉():
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
def 右轉():
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
def 後退():
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, 255)
def 直線():
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)

def on_forever():
    for index in range(4):
        右轉()
        basic.pause(1000)
        直線()
        basic.pause(1000)
        左轉()
        basic.pause(1000)
        直線()
basic.forever(on_forever)
