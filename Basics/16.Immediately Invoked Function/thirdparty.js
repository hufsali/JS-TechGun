(function(){
    let msg="Hello third party";
function greet(){
    console.log(msg);
}
greet();
})();
//is sy error a jata hy aur hum kisi ka code use nhi kr skty
// conflict sy bchanay k lye we make third party code into a local function. and immediately invoke it.

