let newdiv=document.createElement('div');

let val=localStorage.getItem('text');
let text;
if(val==null)
{
    text=document.createTextNode('click to edit it');
}
else
{
    text=document.createTextNode(val);
}


newdiv.appendChild(text);

newdiv.setAttribute('id','elem');

newdiv.setAttribute('style','border:2px solid red; height:95px; width:112px');


let container=document.querySelector('.container');
let firstdiv=document.getElementById('hd1');

container.insertBefore(newdiv,firstdiv);


newdiv.addEventListener('click',function(){
    let notxtarea=document.getElementsByClassName("textarea").length;
    if(notxtarea==0)
    {
        let html=newdiv.innerHTML;
        newdiv.innerHTML =`<textarea class="textarea" id="textarea" rows="3" cols="14"> ${html}</textarea>`;
    }
    let textarea=document.getElementById('textarea');
    textarea.addEventListener('blur',function(e){
        elem.innerHTML=textarea.value;
        localStorage.setItem('text',textarea.value);
    })
    
})
