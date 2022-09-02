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

# Including and Excluding files

Exclude and include are options we can add to tsconfig.json. It can include or exclude files from the compiler.

# Setting a compilation target

With this tsconfig.json setting we can define what version of JS we want our ts code to compile to.

# TS core libs

If the lib tsconfig.json setting is not defined, ts assumes certain defaults. These defaults are **"dom", "es6", "dom.iterable", "scripthost"**. These libraries bring JS functionalities we can use on TS.

# Other configs

allowJs, checkJs, jsx, declaration and decl map are straighforward, see on documentation.

# Source Map tsconfig.json setting

It helps with debugging. It enables our TS files in the browser, making a bridge between JS and TS.

# root dir and outdir tsconfig.json setting

out dir redirects compiled folders to a soecified dir. root dir specifies the root directory for compiled files.

# Stop emitting files on compilation tsconfig.json setting

noEmitOnError is an option that makes the ts compiler not compile into JS when an error occurs.

# Strict compilation

if strict is true all the strict type options will be true, if false, we can define one by one.
Some options are very interesting and makes us write better code.

# Code quality options

Additional checks makes TS gives us warning or hints when writting code.
For example if we declare a variable and we don't use it, we will be warned.

# debugging with visual studio code

Extensions: ELint, Prettier, Debugger for Chrome(makes it possible to debugg like in Chrome Dev Tools but inside VSCode).

# Usefull Links:

- tsconfig Docs: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

- Compiler Config Docs: https://www.typescriptlang.org/docs/handbook/compiler-options.html

- VS Code TS Debugging: https://code.visualstudio.com/docs/typescript/typescript-debugging
