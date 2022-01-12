$(document).ready(function() {

    var $boxes = $('.box');
    $boxes.hide();
  
    var $container = $('#post-area');
    $container.imagesLoaded( function() {
      $boxes.fadeIn();
  
      $container.masonry({
          itemSelector : '.box',
          columnwidth: 300,
          gutter: 20,
          isFitWidth: true,
          isAnimated: !Modernizr.csstransitions
      });    
    });
  });