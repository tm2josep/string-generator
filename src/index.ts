import Token from './Token';
class TokenList {
    private tokens = [];

    constructor() { }

    add(tokens) {
        tokens.forEach(token => this._add(token))
    }

    private _add(token) {
        token.connected = this.tokens[0];
        this.tokens.unshift(token);
    }

    next() {
        this.tokens[0].next();
    }

    get text() {
        return this.tokens.slice().reverse().map(token => token.current).join('')
    }
}

let tokenList = new TokenList();
tokenList.add(
    [
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        '0123456789'
    ].map(chars => new Token(chars))
);

for (let i = 0; i < 100; i++) {
    console.log(tokenList.text);
    tokenList.next();
}