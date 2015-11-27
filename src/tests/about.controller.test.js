describe('AboutController', function(){
  beforeEach(module('app'));
  var AboutController;


  beforeEach(inject(function($controller){
    AboutController = $controller('AboutController');
  }));

  it('Should load the AboutController', function(){
    expect(AboutController).toBeDefined();
  });
});
