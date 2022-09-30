input.onButtonPressed(Button.A, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
})
basic.forever(function () {
    GHBit.Min_Motor_Shake(GHBit.Motorshock.ON)
    if (mbit_Sensor.IR_Sensor(DigitalPin.P0, mbit_Sensor.enIR.Get)) {
        basic.showArrow(ArrowNames.East)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinRight)
        if (mbit_Sensor.IR_Sensor(DigitalPin.P0, mbit_Sensor.enIR.NoGet)) {
            mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
            mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
            mbit_Motor.Fan(AnalogPin.P0, 1023)
        }
    }
})
