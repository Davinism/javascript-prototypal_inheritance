Function.prototype.inherits = (parent) => {
  function Surrogate() {}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};
