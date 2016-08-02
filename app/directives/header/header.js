export default ngModule => {
  ngModule.directive('header', ()=> {
    return {
      restrict: 'EA',
      scope: {},
      template: require('./header.html'),
      controllerAs: 'vm',
      controller() {
        const vm = this;
        
        vm.title = 'Header';
      }
    }
  });
}
