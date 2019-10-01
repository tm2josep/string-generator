import Token from './Token';

export default class TokenList {
    private tokens = [];
    constructor() { }

    add(tokens: Token[]): void {
        tokens.forEach((token: any) => this._add(token));
    }

    private _add(token: Token): void {
        token.connected = this.first;
        this.tokens.unshift(token);
    }

    private get first(): Token {
        return this.tokens[0];
    }

    private get last(): Token {
        return this.tokens[this.tokens.length - 1];
    }

    next(): void {
        this.tokens[0].next();
    }

    get text(): string {
        return this.tokens
            .slice()
            .reverse()
            .map(token => token.current)
            .join('');
    }

    * generator() {
        let first = this.text;
        let i = 0;
        this.next();
        while (this.text !== first) {
            i++;
            yield this.text;
            this.next();
        }
        return;
    }
}
