exports = {
  modules: [ 'colors' ],

  go(params) {
    // params: the parameters provided by the event firing the extension

    const colors = MODULES['colors']
    console.log(colors.red(`*************************************`))
    console.log(colors.red(`*************************************`))
    console.log(colors.green.underline('Hello World Euphoritech Extension Example'))
    console.log(colors.blue(`params: ${JSON.stringify(params)}`))
    console.log(colors.red(`*************************************`))
    console.log(colors.red(`*************************************`))
  }
}
