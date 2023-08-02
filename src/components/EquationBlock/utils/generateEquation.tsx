import { EquationGenerator } from './EquationGenerator'

export const renderEquation = () => {
    const generator = new EquationGenerator()
    const randomFlag = generator.generateRandomNumber(1, 3)
    const equationArray = generator.generateEquation()
    let solving: string | number = 0

    switch (randomFlag) {
        case 1:
            solving = equationArray[0]
            equationArray[0] = 'x'
            break

        case 2:
            solving = equationArray[2]
            equationArray[2] = 'x'
            break

        case 3:
            solving = equationArray[4]
            equationArray[4] = 'x'
            break
    }

    return {
        answer: solving,
        equation: equationArray.join(''),
        isRight: false,
    }
}
