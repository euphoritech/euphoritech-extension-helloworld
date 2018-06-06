# euphoritech-extension-helloworld

Quick example of how you can build an extension for the [euphoritech](https://github.com/euphoritech/euphoritech)
platform so you can customize what happens whenever an event fires.

## Entry Point

`index.js`

## How To Use

In order to create a valid extension to be used in euphoritech events,
you have to export an object with several parameters.

### Parameters

1. go (required) [function]: a function that defines what to do. Any external modules
you need (see `modules` parameter below) are exposed in a `MODULES` object.

2. modules (required) [array]: an array of NPM modules you optionally need to
install to use within your `go()` function.
