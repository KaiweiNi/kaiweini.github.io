//Create a variable which is ALWAYS the image in HTML
let myImage = document.querySelector('img');
//create a function for when the image is clicked
myImage.onclick = function()
{
    //Even though my images don't have the same dimensions my style.css keeps everything the same width
    //Create a variable source to perform conditional checks
    let mySrc = myImage.getAttribute('src');
    //If statement similar to java
    if(mySrc === 'images/sample-image.jpg')
    {
        myImage.setAttribute('src', 'images/image2.jpg');
    }
    else
    {
        myImage.setAttribute('src', 'images/sample-image.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName()
{
    let userName = prompt('Please enter your name');
    //!userName performs the check for both null and an empty string
    if(!userName)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem('name', userName);
        myHeading.textContent = 'Welcome, '+userName;
    }
}

myButton.onclick = function()
{
    setUserName();
}

//if the browser DOESN'T have data on a name, ask for it
if(!localStorage.getItem('name'))
{
    setUserName();
}
else
{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, '+storedName;
}