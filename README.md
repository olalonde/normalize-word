# normalize-word

Locale sensitive normalization of words.

Similar to [https://github.com/fyalavuz/node-parameterize/tree/master](https://github.com/fyalavuz/node-parameterize/tree/master).

```typescript
// examples
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
