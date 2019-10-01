export default class Token {
    private charset: String[];
    private counter: number;
    public connected: Token;
    constructor(chars: string) {
        this.counter = 0;
        this.charset = chars.split('');
    }

    get current() {
        return this.charset[this.index];
    }

    get length() {
        return this.charset.length;
    }


    get rounds() {
        return Math.floor(this.counter / this.charset.length);
    }

    next() {
        const roundBefore = this.rounds;
        this.counter++;
        if (this.rounds > roundBefore) {
            this.connected.next();
        }
        return this.current;
    }

    private get index() {
        return this.counter % this.charset.length;
    }
}
