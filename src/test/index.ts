import assert from "node:assert";
import { normalize } from "../index.js";

assert.equal(normalize("Francais"), "francais");
assert.equal(normalize("Français"), "francais");
assert.equal(normalize(" Français"), "francais");
assert.equal(normalize(" Français  "), "francais");
assert.equal(normalize(" espanol  "), "espanol");
assert.equal(normalize("españOl"), "espanol");
assert.equal(normalize("español"), "espanol");
assert.equal(normalize("ESpañol"), "espanol");
assert.equal(normalize("a B      c "), "a b      c");
