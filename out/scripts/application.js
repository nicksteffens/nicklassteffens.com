  /*

  Application controlling all functions

  */
  NS = {
  // collection of all jquery objects
  objects: {
  thumb: $('.thumb'),
  overlay: $('.overlay'),
  lightbox: $('.lightbox'),
  closebttn: $('.close')
  },
  // init all functions
  init: function() {
  Listener.thumbClicked();
  }
  }

Listener = {
  // listens for art thumbs to be clicked
  thumbClicked: function() {
    NS.objects.thumb.click(function(e){
      e.preventDefault();
      var self = $(this).attr('title');
      Render.toggleOverlay();
      Render.toggleLightBox();
      Listener.closeOverlay();
    });
  },
  // listens for overlay or close to be clicked to clicked
  closeButton: function() {
    NS.objects.thumb.click(function(e){
      e.preventDefault();
  }


}

Render = {

  toggleOverlay: function() {
    NS.objects.overlay.toggle();
  },

  toggleLightBox: function() {
    NS.objects.lightbox.toggle();
  }

}

Utility = {
  
  closeOverlay: function() {
      Render.toggleOverlay();
      Render.toggleLightBox();
  }
}