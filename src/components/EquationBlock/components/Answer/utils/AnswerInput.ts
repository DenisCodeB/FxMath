export class AnswerInput {
    private input = document.getElementById('answer-input') as HTMLInputElement

    public getInputValue() {
        const value = this.input.value.match(/(\d+|-\d+)/)?.[0]
        if (value) return +value
    }

    public clearInput() {
        this.input.value = 'x='
    }
}
