let arr = []
let evtArr = []

class elementTodo {
  constructor() {
    this.li = document.createElement('li');
    this.li.id = new Date().getTime();
    this.div = document.createElement('div');
    this.div.classList.add('view');
    this.label = document.createElement('label');
    this.label.textContent = document.querySelector('.new-todo').value;
    document.querySelector('.new-todo').value = "";
    this.checkbox = document.createElement('input');
    this.checkbox.classList.add('toggle');
    this.checkbox.type = 'checkbox';
    this.label.addEventListener('dblclick',function(e){
    });
    document.querySelector('ul.todo-list').appendChild(this.li);
    document.getElementById(this.li.id).appendChild(this.div);
    document.getElementById(this.li.id).appendChild(this.checkbox);
    document.getElementById(this.li.id).appendChild(this.label);
    this.checkbox.addEventListener('change',function(e){
      return;
    })
  }

  toggleElem(){
    this.li.classList.toggle('completed');
    this.checkbox.checked = this.li.classList.contains('completed');
    this.checked = this.checkbox.checked;
    for (let i = 0; i < arr.length; i++)
    {
      if(arr[i].checked){
        document.querySelector('.clear-completed').style.display='block';
        return;
      }
      document.querySelector('.clear-completed').style.display='none';
    }
    return;
  }
}


document.querySelector('body').addEventListener('keypress', function (e) {
  let key = e.which || e.keyCode;
  if (key === 13 && document.querySelector('.new-todo').value !== "" ) {

    arr.push(new elementTodo());
  }
});


document.querySelector('body').addEventListener('dblclick',function (e) {

}
);


document.querySelector('.toggle-all').addEventListener('click', function(e){
  for (let i = 0; i < arr.length ; i++){
    arr[i].toggleElem();
  }
},true)

document.querySelector('body').addEventListener('dblclick',function (e) {
  evtArr.push(e);
  console.log('double click '+e);
  console.log(e.target);

  let parent = e.target.parentNode;
  console.log(parent);
  if(parent.nodeName == "LI"&& e.target.parentNode.id!="") {
    parent.classList.toggle('editing');
    //e.target.parentNode.style.hidden = true;
    let textbox = document.createElement('input')
    textbox.classList.add('edit')
    textbox.value = e.target.parentNode.querySelector('label').textContent;
    parent.querySelector('label').style.display = 'none' ;
    parent.appendChild(textbox);
    textbox.focus();
    textbox.addEventListener('keypress',function (e){
      let key = e.which || e.keyCode;

      if (key === 13 && textbox.value !== "" ) {
        parent.querySelector('label').textContent = textbox.value;
        parent.querySelector('label').style.display = 'block';
        parent.removeChild(textbox);
        return;
      }
    })



  }

  setTimeout(function () {evtArr=[]},500);

});




document.querySelector('body').addEventListener('click',function (e) {
  console.log(evtArr.length);
  setTimeout(function (){
    if (evtArr.length>0){
      console.log(evtArr.length);
      return;
    }

  console.log('simple click '+e);
  if(e.target === document.querySelector('button.clear-completed')){
    for (let i = 0 ; i<arr.length; i++)
    {
      console.log('i'+i);

      if (arr[i].checked){
        try {
          console.log('element à supprimer i '+i+' '+arr[i].li);
          document.querySelector('ul.todo-list').removeChild(arr[i].li)
          arr.splice(arr[i],1);
          i--;
          console.log('element supprimé avec success');
        } catch (e) {
          console.log("imossible enlever l'element "+arr[i].li);
        } finally {

        }
      }

    }
  }
  if(e.target.nodeName == "A")
  {
    for (var item of document.querySelectorAll('a')) {
      item.classList.remove('selected');
    }
    e.target.classList.add('selected');
    switch (e.target.textContent) {
      case 'Active':
      console.log('active');
      for (let i = 0 ; i< arr.length;i++){
        console.log('i'+i);
        if (arr[i].checked){
          arr[i].li.style.display='none';
        }
        else {
          arr[i].li.style.display='block';
        }
      }
      break;
      case 'Completed':
      for (let i = 0 ; i< arr.length;i++){
        console.log('i'+i);
        if (arr[i].checked){
          arr[i].li.style.display='block';
        }
        else {
          arr[i].li.style.display='none';
        }
      }
      break;
      case 'All':
      for (let i = 0 ; i< arr.length;i++){
        console.log('i'+i);
        arr[i].li.style.display='block';
      }
      console.log('all');
      break;
    }
  }


  if(e.target.parentNode.nodeName == "LI"&& e.target.parentNode.id!="") {
    console.log('if 3');
    for (let i = 0,l = arr.length; i < l ; i++)
    {
      if (e.target.parentNode.id == arr[i].li.id)
      {
        arr[i].toggleElem();
        return;
      }
    }
  }

},
400);},false);
