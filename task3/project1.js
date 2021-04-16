
document.getElementById("addbtn").onclick = function (){
    addspons();
};

function addspons (){
    const photopath = document.getElementById("sponsimg");
    const photolink = document.getElementById("sponslink");
    const photoid = document.getElementById("sponsid");

    const input={
        path: photopath.value,
        link: photolink.value,
        ID: photoid.value,
    }
    const div = document.createElement('div');

    div.setAttribute("id",input.ID)

    div.style.backgroundColor = " rgb(1,11,38)";
    div.style.padding = "50px 0px";
    div.style.width = "1349";

    div.innerHTML = '<a target="_blank"  href="'+input.link+'"><img class="sponser" src='+input.path+'></a>';
    
    document.getElementById("sponsers").appendChild(div);
    return input;
    
}
document.getElementById("R").onclick = function (){
    removespons();
};
function removespons (){
    console.log("true");
   
   const Removespons= document.getElementById("sponsid").value;
  
  
   const remove= document.getElementById(Removespons);
   remove.remove();
}
    