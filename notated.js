function objFactory({ var1, _var2, _var3 = 6 }) {
  const { mixin2: _mixin2, var1: otherVar1 } = anotherObjFactory({
    foo: 1,
    bar: 2,
  });

  let _var4;
  let _var5;
  const NAME = 'Rorschach';

  function addVar3 (value) {
    return (value + _var3);
  }

  return Object.freeze({
    var1,
    otherVar1,
    addVar3,
    NAME,
  });
}

function anotherObjFactory({ foo: _mixin1, bar: mixin2 }) {
  let _minxin3;
  let var1 = 1;
  const NAME = 'Bob';

  function _mixinMethod(value) {
    return (value + var1);
  }

  return Object.freeze({
    mixin2,
    var1,
    NAME,
  });
}

let newObj = objFactory({
  var1: 2,
  _var2: 1,
});

console.log(newObj.NAME);
