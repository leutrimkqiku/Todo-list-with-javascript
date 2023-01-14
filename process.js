var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

form.addEventListener('submit',addItem)
// shto nje item apo nje liste

itemList.addEventListener('click',removeItem)
// largon nje item apo nje liste

// ndertojme funksionin i cili e shton nje liste

function addItem(e) {
    e.preventDefault()
    
    var newItem=document.getElementById('item').value;
    // marrim vleren e cila futet ne Input

    var li=document.createElement('li');
// e ndertojme nje element te ri pra nje liste

li.className='list-group-item';
    var deleteBtn=document.createElement('button');

    deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.className='btn btn-danger float-right delete';

    li.appendChild(deleteBtn);





li.appendChild(document.createTextNode(newItem))


itemList.appendChild(li);

   
    
}

function removeItem(e) {

    if (e.target.classList.contains('delete')) {
        
       if (confirm("Are you sure that you want to remove this Item")) {
        var li=e.target.parentElement;
        itemList.removeChild(li);

       }

    }
    
}