// Blog
		var blogStatic = new Image();
			blogStatic.src = "images/blog_static.png";
				
		var blogRO = new Image();
			blogRO.src = "images/blog_ro.png";
		
// Gallery
		var galleryStatic = new Image();
			galleryStatic.src = "images/gallery_static.png";
				
		var galleryRO = new Image();
			galleryRO.src = "images/gallery_ro.png";
			
// About Me
		var aboutmeStatic = new Image();
			aboutmeStatic.src = "images/aboutme_static.png";
				
		var aboutmeRO = new Image();
			aboutmeRO.src = "images/aboutme_ro.png";
// Email
		var emailStatic = new Image();
			emailStatic.src = "images/email.png";
				
		var emailRO = new Image();
			emailRO.src = "images/email_ro.png";	

// Blog
		function blogrollover(){

			document.getElementById("blog").src = blogRO.src;
	
		}

		function blogrolloff(){		
		
			document.getElementById("blog").src = blogStatic.src;

		
		}

// Gallery
		function galleryrollover(){

			document.getElementById("gallery").src = galleryRO.src;
		
		}

		function galleryrolloff(){		
		
			document.getElementById("gallery").src = galleryStatic.src;
		
		}
		
// About Me		
		function aboutmerollover(){

			document.getElementById("about").src = aboutmeRO.src;
		
		}

		function aboutmerolloff(){		
		
			document.getElementById("about").src = aboutmeStatic.src;
		
		}

// Email	
		function emailrollover(){

			document.getElementById("email").src = emailRO.src;
		
		}

		function emailrolloff(){		
		
			document.getElementById("email").src = emailStatic.src;
		
		}
		