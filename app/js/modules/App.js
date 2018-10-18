class App {
  constructor() {
    let self = this;
    this.name = "";
    window.app = this;
    this.log();
  }

  log() {
    return this;
  }
}

module.exports = App;
