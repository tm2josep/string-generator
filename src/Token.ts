export default class Token {
    private charset: String[];
    private counter: number;
    public connected: Token | undefined;

    constructor(chars: string) {
        this.counter = 0;
        this.charset = chars.split('');
    }

    private get index(): number {
        return this.counter % this.charset.length;
    }

    get current(): string {
        return <string>this.charset[this.index];
    }

    get rounds(): number {
        return Math.floor(this.counter / this.charset.length);
    }

    next(): string {
        const previousRound = this.rounds;
        this.counter++;

        if (this.rounds > previousRound) {
            this.connected && this.connected.next();
        }

        return this.current;
    }

}
