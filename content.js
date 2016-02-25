$( document ).ready(function() {

	var url = $(location).attr('href');


//START FOOTLOCKER AUTOADD//
	var fluserSize;

		function getFLSize(){
			if(url.indexOf('footlocker.com/product/model') > -1){
				chrome.storage.local.get("flusersize", function (obj) {
			    	var fluserSizeObj = obj;
			    	fluserSize = fluserSizeObj.flusersize;
			    	console.log('Foot Locker:' + fluserSize);
				});
			}
		}
		function footLockerAdd() {
			if(url.indexOf('footlocker.com/product/model') > -1){
			console.log('Foot Locker Ready To Add!');
			var e1 = document.createEvent("MouseEvents");
			e1.initMouseEvent("mousedown", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
			jQuery("option[value|=" + "'" + fluserSize +"'" + "]")[0].dispatchEvent(e1);
			jQuery("#product_sizes").blur();
			$('input.active_step').trigger('click');
			}
		}
		function footLockertakeToCart() {
			if(url.indexOf('footlocker.com/product/model') > -1){
			$(".fullscreenDisabled").trigger('click');
			$("a[title|='View Shopping Cart']")[0].click();
			}
		}
		function footLockerPayPal(){
			if(url.indexOf('footlocker.com/shoppingcart/') > -1){
			$("a[title|='Check Out with PayPal']")[0].click();
			}
		}

//FOOTLOCKER FUNCTION CALLS//
	getFLSize();
	setTimeout(footLockerAdd,2000);
	setTimeout(footLockertakeToCart,2000);

//END FOOTLOCKER AUTOADD


//START EASTBAY AUTOADD//
	var ebuserSize;

	function getEbSize(){
		if(url.indexOf('eastbay.com/product/model') > -1){
			chrome.storage.local.get("ebusersize", function (obj) {
		    	var ebuserSizeObj = obj;
		    	ebuserSize = ebuserSizeObj.ebusersize;
		    	console.log('Eastbay:' + ebuserSize);
			});
		}
	}
	function eastBayAdd(){
		if(url.indexOf('eastbay.com/product/model') > -1){
			console.log('Eastbay Ready to Add!');
			$("a[title|='Select a Size']")[0].click();
			$("a[title|=" + "'" + ebuserSize + "'" + "]")[0].click();
			$("button#add_to_cart").trigger('click');
		}
	}
	function eastBayTakeToCart(){
		if(url.indexOf('eastbay.com/product/model') > -1){
			console.log('Eastbay Taking To Cart!');
			$("a[id|='push_mc_checkout_button']")[0].click();
		}
	}
	function eastBayPayPal(){
		if(url.indexOf('eastbay.com/shoppingcart/') > -1){
			console.log('Checking out with PayPal');
			$("a[title|='Checkout With PayPal']")[0].click();
		}
	}
//EASTBAY FUNCTION CALLS//
	getEbSize();
	setTimeout(eastBayAdd,2000);
	setTimeout(eastBayTakeToCart,6000);
	eastBayPayPal();

//END EASTBAY AUTOADD//


//START NIKE AUTOADD//
	var nikeuserSize;

	function getNikeSize(){
		if(url.indexOf('store.nike.com/') > -1){
			chrome.storage.local.get("nikeusersize", function (obj) {
				console.log("Getting Size!")
		    	var nikeuserSizeObj = obj;
		    	nikeuserSize = nikeuserSizeObj.nikeusersize;
		    	console.log('Nike:'+ ' ' + nikeuserSize);
			});
		}
	}
	function nikeShowSizeChart(){
		if(url.indexOf('store.nike.com/') > -1){
			console.log('Showing Size Chart');
			$(".exp-pdp-size-dropdown-container").css('display','block');
		}
	}
	function nikeSelectSize(){
		if(url.indexOf('store.nike.com/') > -1){
			console.log('Selecting Size!');
			$("li[rel*=" + "'" + nikeuserSize + "'" + "]").trigger('click');
		}
	}
//NIKE FUNCTION CALLS//
	getNikeSize();
	setTimeout(nikeShowSizeChart,2000);
	setTimeout(nikeSelectSize, 5000)

});
