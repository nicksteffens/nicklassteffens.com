/*

Application controlling all functions

*/
NS = {
    // collection of all jquery objects
    objects: {
        thumb: $('.thumb'),
        overlay: $('.overlay'),
        lightbox: $('.lightbox')
    },
    // init all functions
    init: function() {
        EventListener.thumbClicked();
    }
}

EventListener = {
    // listens for art thumbs to be clicked
    thumbClicked: function() {
        NS.objects.thumb.click(function(e){
            e.preventDefault();
            var self = $(this).attr('title');
            Render.toggleOverlay();
            Render.toggleLightBox();
            EventListener.closeOverlay();
        });
    },
    
    // listens for overlay or close to be clicked to clicked
    closeOverlay: function() {
        NS.objects.overlay.click(function(){
            Render.toggleOverlay();
            Render.toggleLightBox();
        });
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