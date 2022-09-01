# Watch Mode

To avoid always having to compile our ts files we can use Watch Mode:

> `tsc filename.ts --watch`

_or_

> `tsc filename.ts --w`

**The watch mode shouldn't be terminated while developing.**
Downside is you still need to target only one file.

# Compiling multiple files

> `tsc --init`

This will initiate the ts project. Generating a tsconfig.
Then if we use tsc and watch mode we can compile all ts files.

> `tsc --watch` or `tsc --w`
