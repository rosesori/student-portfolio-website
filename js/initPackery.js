// init Packery
var grid = document.querySelector('.grid');
var pckry;

imagesLoaded( grid, function() {
  // init Packery after all images have loaded
  pckry = new Packery( grid, {
    itemSelector: '.grid-item',
    percentPosition: true
  });
});
