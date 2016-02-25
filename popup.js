document.addEventListener('DOMContentLoaded', function() {

	document.getElementById('fl-ext-select-size').addEventListener('change', function() {
			var flusersize = document.getElementById('fl-ext-select-size').value;
			chrome.storage.local.set({'flusersize':flusersize}, function () {
			document.getElementById('flChoiceSucess').innerHTML = 'Size Saved!';
	        console.log("Foot Locker Size",flusersize);
    	});
		    
	});


	document.getElementById('eb-ext-select-size').addEventListener('change', function() {
			var ebusersize = document.getElementById('eb-ext-select-size').value;
			chrome.storage.local.set({'ebusersize':ebusersize}, function () {
			document.getElementById('ebChoiceSucess').innerHTML = 'Size Saved!';
	        console.log("Eastbay Size",ebusersize);
    	});
		    
	});

	document.getElementById('nike-ext-select-size').addEventListener('change', function() {
			var nikeusersize = document.getElementById('nike-ext-select-size').value;
			chrome.storage.local.set({'nikeusersize':nikeusersize}, function () {
			document.getElementById('nikeChoiceSucess').innerHTML = 'Size Saved!';
	        console.log("Nike Size",nikeusersize);
    	});
		    
	});

 });