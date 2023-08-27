export class AnswerInput {
    private input = document.getElementById('answer-input') as HTMLInputElement

    public getInputValue() {
        const value = this.input.value.match(/(\d+|-\d+)/)?.[0]
        if (value) return +value
    }

    public clearInput() {
        console.log(this.input.value)
        this.input.value = 'x='
        console.log(this.input.value)
    }
}
