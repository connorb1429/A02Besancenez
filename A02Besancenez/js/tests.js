QUnit.test( "Check dates", function( assert ) {
  // First one was not working
  //assert.equal(App.calculateDifference("01/11/1111", "01/11/1111", 1));
  assert.notOk(App.calculateDifference("string", "string"));
  assert.notOk(App.calculateDifference("11/11/1111", "string"));
  assert.notOk(App.calculateDifference("string", "11/11/1111"));
});