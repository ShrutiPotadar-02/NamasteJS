
//What is callback function?
//---Function that is passed on as argument to another function is called callback function.

setTimeout(function()
{
    console.log("timer");
},5000);

function x(y)
{
    console.log("x");
    y();
}
x(function y()
{
    console.log("y")
}
);


//SetTimeout
//---setTimeout helps turn JS which is sinhlethreaded and synchronous into asynchronous.


//Event Listeners

function attachEventListeners()
{
    let count=0;
document.getElementById("button")
.addEventListener("click", function xy()
{
    console.log("JS",count++);
});
}
attachEventListeners();