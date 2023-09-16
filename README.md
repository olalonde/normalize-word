# normalize-word

[![Node.js test](https://github.com/olalonde/normalize-word/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/olalonde/normalize-word/actions/workflows/main.yml)

Locale sensitive normalization of words.

Similar to [https://github.com/fyalavuz/node-parameterize/tree/master](https://github.com/fyalavuz/node-parameterize/tree/master).

```typescript
// examples
import normalize from "normalize-word";
import assert from "node:assert";

assert.equal(normalize("Francais"), "francais");
assert.equal(normalize("Français"), "francais");
assert.equal(normalize(" Français"), "francais");
assert.equal(normalize(" Français  "), "francais");
assert.equal(normalize(" espanol  "), "espanol");
assert.equal(normalize("españOl"), "espanol");
assert.equal(normalize("español"), "espanol");
assert.equal(normalize("ESpañol"), "espanol");
assert.equal(normalize("a B      c "), "a b      c");
```

## Install

```console
npm install normalize-word
```
