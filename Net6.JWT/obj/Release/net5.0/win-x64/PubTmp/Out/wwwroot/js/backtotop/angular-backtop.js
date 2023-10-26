var backtop = angular.module('angular.backtop', []);

backtop.directive('backTop', [function() {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
      template: '<div id="backtop" class="{{theme}}">  <md-button  class="md-fab md-primary" aria-label=""> <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="#000000" width="24" height="24"><path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"></path></svg> </md-button></div>  ' ,
    scope: {
      text: "@buttonText",
      speed: "@scrollSpeed",
      theme: "@buttonTheme"
    },
    link: function(scope, element) {

      scope.text = scope.text || 'Scroll top';
      scope.theme = scope.theme || 'light';
      scope.speed = parseInt(scope.speed, 10) || 300;
      
      var speed = Math.round(scope.speed / 100);
      var onscroll = function() {
        if (window.pageYOffset > 0) {
          if(!element.showing){
            element.addClass('show');
            element.showing = true;
          }
        } else {
          element.removeClass('show');
          element.showing = false;
        }
      }

      scope.currentYPosition = function() {
        if (document.documentElement && document.documentElement.scrollTop)
          return document.documentElement.scrollTop;
        if (document.body.scrollTop)
          return document.body.scrollTop;
        return 0;
      };

      element.showing = false;
      element.on('click', function() {
        window.removeEventListener("scroll", onscroll);

        element.removeClass('show');
        element.showing = false;

        var startY = scope.currentYPosition();

        var step = Math.round(startY / 25);
        var leapY = startY < 100 ? 0 : startY - step;

        var scrollInterval = setInterval(function(){
          window.scrollTo(0, leapY)
          if(!leapY){
            clearInterval(scrollInterval);
            window.addEventListener("scroll", onscroll)
          }

          leapY -= step;

          if(leapY < 0) leapY = 0;
        }, speed)
      });

      window.addEventListener("scroll", onscroll);
      scope.$on("$destroy", function(){
        window.removeEventListener("scroll", onscroll)
      })
    }
  };

}]);
