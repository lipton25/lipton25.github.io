function load() {
    var content=document.getElementById('tracknumber').value;
if (content !="" && content === "PS3807140S"){
     
	var mydata = JSON.parse(data);
   	    
    
	 $("#tracknumber").replaceWith("<table><tr><td><p>Tracking Number : </p></td><td><p>"+mydata[0].code+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Shipment Date :</p></td><td><p>"+mydata[0].packed+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Delivery Date :</p></td><td><p>"+mydata[0].eta+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Postal Product :</p></td><td><p>"+mydata[0].mode+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Content :</p></td><td><p>"+mydata[0].content+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Name :</p></td><td><p>"+mydata[0].name+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Address :</p></td><td><p>"+mydata[0].addr+"</p></td></tr><tr></tr><tr></tr><tr><p><td><p>Package Location :</p></p></td><td><p>"+mydata[0].loc+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Agent Contact :</p></td><td><p>"+mydata[0].tel+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Status :</p></td><td><p>"+mydata[0].status+"</p></td></tr></table>");
    $( "#submitbutton" ).remove();
    
}
else{
    alert("Tracking code is invalid!");
   
}}
