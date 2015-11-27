describe('HomeController', function(){
  beforeEach(module('app'));
  var HomeController;


  beforeEach(inject(function($controller){
    HomeController = $controller('HomeController');
  }));

  it('Should load the HomeController', function(){
    expect(HomeController).toBeDefined();
  });
});
