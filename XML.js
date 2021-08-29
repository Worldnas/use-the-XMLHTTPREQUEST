function load()
	{
	document.getElementById("result").innerHTML="<img src=image.gif />"
var xmlhttp;
var name=document.getElementById("myname");
if(window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
	}
else
	{
		xmlhttp= new ActiveXObject("Microsoft.XMLhttp");
	}
xmlhttp.onreadystatechange=function(){
	if(xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			//xmlhttp.responseText
			document.getElementById("result").innerHTML=xmlhttp.responseText;
		}
}
xmlhttp.open("GET","panel.php?name="+name.value,"true");
xmlhttp.send();
	}