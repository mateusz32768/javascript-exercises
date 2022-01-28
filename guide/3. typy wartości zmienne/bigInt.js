console.log(1234n); // Nie taki znów ogromny literał BigInt.
0b111111n; // Binarny literał BigInt.
0o7777n; // Ósemkowy literał BigInt.
0x8000000000000000n; // => 2n**63n: 64-bitowy literał BigInt.

BigInt(Number.MAX_SAFE_INTEGER); // => 9007199254740991n
let string = '1' + '0'.repeat(100); // Jedynka i 100 zer.
BigInt(string); // => 10n**100n: jeden googol.
