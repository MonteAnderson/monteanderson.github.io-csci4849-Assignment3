function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks, actualLength;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
	
	addInput = document.getElementsByClassName("dialerInput").value = "";
	
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
	

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
	
}
	var actualLength = 0;
	
	function addContactFunc(){
		window.alert("Contact Added.");
	}
	
	function contactAddClear(){
		document.getElementById('contactEmail').value ='';
		document.getElementById('contactName').value ='';
		document.getElementById('contactNumber').value ='';				
	}
	
    function dialerFunc(num){

		
		console.log(actualLength);
		if (actualLength <= 9){
			document.getElementById('dialerInput').value+=num;
			actualLength+=1;
		}
		
		if ((actualLength %3) == 0 && (actualLength <= 6)){
			document.getElementById('dialerInput').value+="-";
		}
	}
	
	function dialerClear(num){
		document.getElementById('dialerInput').value ='';
		actualLength = 0;
	}