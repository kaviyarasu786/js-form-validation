function jsform()
{
    var name=document.formaction.name.value;
    var password=document.formaction.password.value;

    if(name=="null" || name=="")
    {
         alert("name is empty");
        return false;
    }
    else if(password.length<10)
    {
        alert("password must be 10 characters");
        return false;
    }
}