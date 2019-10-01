import TokenList from './TokenList';
import Token from './Token';

let tokenList = new TokenList();
tokenList.add(
    [
        'abcdefghijklmnopqrstuvwxyz',
        '012'
    ].map(chars => new Token(chars))
);

for (let text of tokenList.generator()) {
    console.log(text);
}