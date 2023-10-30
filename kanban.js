const add_button_node =document.getElementById('add_button')
const new_task_node =document.getElementById('new_task')
const to_do_board_node =document.querySelector('.to_do')
const board_node = document.getElementsByClassName('board')
//let cur_node= document.querySelector('dragging')

// add new tasks
add_button_node.addEventListener('click',function(e){
    let task = document.createElement('h3')
    task.innerText=new_task_node.value
    //console.log(new_task_node.value)
    task.classList.add('task')
    task.setAttribute('draggable',"true")
    console.log(task)
    new_task_node.value=""
    attachDragListner(task)
    to_do_board_node.appendChild(task)
})
// add class 'dragging' to the task that is  selected
const all_tasks= document.querySelectorAll('.task')
    console.log(all_tasks)
// for (let j=0;j<all_tasks.length;j++)
// {   
//      all_tasks[j].addEventListener('dragstart',function(){
//          all_tasks[j].classList.add('dragging')
//     })
//         all_tasks[j].addEventListener('dragend',function(){
//         all_tasks[j].classList.remove('dragging')
//      })
//  }
    //console.log(Array.isArray(all_tasks))
    all_tasks.forEach((task) => attachDragListner(task));
    

// add cur_node (dragging) one to current board
for(let i=0;i<board_node.length;i++){
    board_node[i].addEventListener('dragover',function(e){
        let cur_node= document.querySelector('.dragging')
        board_node[i].appendChild(cur_node)

    })
} 
