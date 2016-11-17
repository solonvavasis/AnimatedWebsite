//play song on mouseover
function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}
//stop song on mouseout
function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}
	
	
	//carousel
   
    $(function () {
      $("#slider4").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });

    });
	
	
	//load text files in par1/par2/par3/par4
	$(document).ready(function(){
		var z;
		for (z=1; z<=4; z++){
			$("#par"+z).load("par"+z+".txt");
		}
	});
	
	//tabs Javascript
	jQuery(document).ready(function() {
		jQuery('.tabs .tab-links a').on('click', function(e)  {
			var currentAttrValue = jQuery(this).attr('href');
	 
			// Show/Hide Tabs
			jQuery('.tabs ' + currentAttrValue).fadeIn(1000).siblings().hide();
	 
			// Change/remove current tab to active
			jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
	 
			e.preventDefault();
		});
	});
	
	
	// "Learn more", "Accesibility and Trasportation" drop down animation and bring data with $get.JSON
	$(document).ready(function(){
		//fire event on click
		$('.more').on('click',function(){
			//get data attribute ID 
			var tabID = $(this).attr('data-slideID');
			
			
			//associate ID with json file
			var x = tabID +'.json';
			//bring data and display them
			$.getJSON(x, function(data) {
			var output="<ul>";
			for (var i in data.rows) {
				output+="<li>" + data.rows[i].row + "</li>";
			}
	
			output+="</ul>";
			document.getElementById(tabID).innerHTML=output;
			//slide down animation
			$('#'+tabID).slideToggle(400);
			//bring collapsed element in view
			$('html, body').animate({ 
				scrollTop: $('#'+tabID).offset().top -300 
			}, 500);
			
			});
			
		});
	});
	
	
	
	
	//Schedule Info drop down animation (animation code is the same as above)
	$(document).ready(function(){
		$('.schedule').on('click',function(){
			var tabID = $(this).attr('data-slideID');
			$('#'+tabID).slideToggle(400);
			
			$('html, body').animate({ 
				scrollTop: $('#'+tabID).offset().top -300 
			}, 500);
		});
	});
	
	
	
	//Schedule (months) drop down animation and bring data with $get.JSON
	$(document).ready(function(){
		$('.lessons').on('click',function(){
			var tabID = $(this).attr('data-slideID');
			var x = tabID +'.json';
			$.getJSON(x, function(data) {
			var output="<ul>";
			for (var i in data.rows) {
				output+="<li>" + data.rows[i].dayName + " " + data.rows[i].dayNum + " " + data.rows[i].month + " -- " + data.rows[i].lesson + " -- 	" + data.rows[i].lecturer + "</li>";
			}
	
			output+="</ul>";
			document.getElementById(tabID).innerHTML=output;
			
			$('#'+tabID).slideToggle(400);
			
			$('html, body').animate({ 
				scrollTop: $('#'+tabID).offset().top -300 
			}, 500);
							
			});
			//workaround for "august" not collapsing
			if (tabID=="august"){
				$('#'+tabID).slideToggle(400);
			
				$('html, body').animate({ 
					scrollTop: $('#'+tabID).offset().top -300 
				}, 500);
			}	
		});
	});