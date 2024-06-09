class RandomGenerator {
    private signsArray = ['+', '-']

    public generateRandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    protected generateRandomSign() {
        const random = Math.round(Math.random())

        return this.signsArray[random]
    }
}

export class EquationGenerator extends RandomGenerator {
    private sign = ''
    private firstNumber = 0
    private secondNumber = 0
    private equals = '='
    private thirdNumber = 0

    constructor() {
        super()
    }

    private defineFirstNumber() {
        this.firstNumber = this.generateRandomNumber(1, 100)
    }

    private defineSecondNumber() {
        this.secondNumber = this.generateRandomNumber(1, 100)
    }

    private defineSign() {
        this.sign = this.generateRandomSign()
    }

    private defineResult(
        firstNumber: number,
        secondNumber: number,
        sign: string,
    ) {
        if (sign === '+') this.thirdNumber = firstNumber + secondNumber
        else this.thirdNumber = firstNumber - secondNumber
    }

    public generateEquation(): Array<string | number> {
        this.defineFirstNumber()
        this.defineSecondNumber()
        this.defineSign()
        this.defineResult(this.firstNumber, this.secondNumber, this.sign)

        return [
            this.firstNumber,
            this.sign,
            this.secondNumber,
            this.equals,
            this.thirdNumber,
        ]
    }
}
