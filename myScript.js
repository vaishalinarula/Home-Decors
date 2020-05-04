function check()
{
	var name = document.getElementById('name').value;
	var mail = document.getElementById('email').value;
		if (name=="" || name==" ")
		{
			alert("Enter your name");
		}
		else if((mail=="") || (mail.search("@"))==-1 )
		{
			alert("Enter correct email id");
		}
		else
		{
			alert("Hello " + name + "\nSubmit Successfully");
			document.getElementById('form').reset();
		}
}