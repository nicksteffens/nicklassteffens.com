  /*

  Application controlling all functioController

  */
Controller = {
  // collection of all jquery objects
  objects: {
    thumb: $('.thumb'),
    overlay: $('.overlay'),
    lightbox: $('.lightbox'),
    closebttn: $('.close'),
    lightboxContent: $('.lightbox .content')
  },
  // init all functionController
  init: function() {
    Listener.thumbClicked();
  }
}

Listener = {
  // listeController for art thumbs to be clicked
  thumbClicked: function() {
    Controller.objects.thumb.click(function(e){
      e.preventDefault();
      var url = $(this).attr('href');
      Render.showLightBox(url);
      Listener.closeOverlay();
    });
  },
  // listeController for overlay or close to be clicked to clicked
  closeOverlay: function() {
    // overlay clicked
    Controller.objects.overlay.click(function(e){
      e.preventDefault();
      Render.closeLightBox();

    });
    // close clicked
    Controller.objects.closebttn.click(function(e){
      e.preventDefault();
      Render.closeLightBox();
    });
    
  }


}

Render = {

  showLightBox: function(url) {
    Controller.objects.overlay.show();
    Controller.objects.lightbox.show();
    Utility.getArtInfo(url);
    
  },

  closeLightBox: function() {
    Controller.objects.overlay.hide();
    Controller.objects.lightbox.hide();
    Controller.objects.lightboxContent.empty();
  }

}

Utility = {
  
  getArtInfo: function(url) {
    // console.log('retrieving '+url);
    Controller.objects.lightboxContent.load(url+' .artItem');
  }
}
