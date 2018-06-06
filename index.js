{
  modules: [ 'colors' ],

  go(params) {
    // params: the parameters provided by the event firing the extension

    const colors = MODULES['colors']
    console.log("Hello World".underline.green)
    console.log(JSON.stringify(params).blue)
  }
}
