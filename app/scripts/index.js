let arr = []

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
      if(e.target.parentNode.nodeName == "LI"&& e.target.parentNode.id!="") {
        e.target.parentNode.classList.toggle('editing')
    }});
    document.querySelector('ul.todo-list').appendChild(this.li);
    document.getElementById(this.li.id).appendChild(this.div);
    document.getElementById(this.li.id).appendChild(this.checkbox);
    document.getElementById(this.li.id).appendChild(this.label);
    arr.push(this);
  }

  toggleElem(){
    // console.log(this.li);

     this.li.classList.toggle('completed');
     this.checkbox.checked = this.li.classList.contains('completed');
     this.checked = this.checkbox.checked;
     return;
    }
  }


document.querySelector('body').addEventListener('keypress', function (e) {
    let key = e.which || e.keyCode;
    if (key === 13 && document.querySelector('.new-todo').value !== "" ) { // 13 is enter
      // console.log(document.querySelector('.new-todo').value);
      arr.push(new elementTodo());
    }
});


document.querySelector('body').addEventListener('click',function (e) {
  console.log(e.target);
  if(e.target.parentNode.nodeName == "LI"&& e.target.parentNode.id!="") {
    for (let i = 0,l = arr.length; i < l ; i++)
    {
      if (e.target.parentNode.id == arr[i].li.id)
      {
        arr[i].toggleElem();
        return;
        // // arr[i].classList.toggle('completed');
        // console.log(arr[i].querySelector('input'));
        // console.log(arr[i].classList.contains('completed'));
        // arr[i].querySelector('input').checked = arr[i].classList.contains('completed');
      }
    }
    // e.target.parentNode.classList.toggle('completed')
	}

},true);
