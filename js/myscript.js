function load() {
    var content=document.getElementById('tracknumber').value;
if (content !=""){
     
	var mydata = JSON.parse(data);
   	    
    
	 $("#tracknumber").replaceWith("<table><tr><td><p>Tracking Number : </p></td><td><p>"+mydata[0].code+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Shipment Date :</p></td><td><p>"+mydata[0].packed+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Delivery Date :</p></td><td><p>"+mydata[0].eta+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Shipment Type :</p></td><td><p>"+mydata[0].mode+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Content :</p></td><td><p>"+mydata[0].content+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Name :</p></td><td><p>"+mydata[0].name+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Address :</p></td><td><p>"+mydata[0].addr+"</p></td></tr><tr></tr><tr></tr><tr><p><td><p>Package Location :</p></p></td><td><p>"+mydata[0].loc+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Telephone :</p></td><td><p>"+mydata[0].tel+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Status :</p></td><td><p>"+mydata[0].status+"</p></td></tr></table>");
    $( "#submitbutton" ).remove();
    
}
else{
    alert("Tracking code is invalid!");
   
}}



/*
<p>Tracking Number: " +mydata[0].code+"</p><br><p>Estimated Delivery Date: " +mydata[0].eta+"</p><br><p>Shipment Date: " +mydata[0].packed+"</p><br><p>Estimated Delivery Date: " +mydata[0].eta+"</p><br><p>Shipment Type: "+mydata[0].mode+"</p><br><p>Content: " +mydata[0].content+"</p><br><p>Receiver's Name: " +mydata[0].name+"</p><br><p>Receiver's Address: " +mydata[0].addr+"</p><br><p>Package Location: " +mydata[0].loc+"</p><br><p>Telephone: " +mydata[0].tel+"</p><br><p>Status: " +mydata[0].status+"</p>
*/