function get_todos() {
    var todos = new Array()
    var todos_str = localStorage.getItem('todo')
    if (todos_str !== null) {
        todos = JSON.parse(todos_str)
    }
    return todos
}
function add() {
    var task = document.getElementById('input_btn').value
    if (task == '') {
        alert('Task Name must be filled out') //fix a typo in new branch
    } else {
        var todos = get_todos()
        todos.push(task)
        localStorage.setItem('todo', JSON.stringify(todos))

        show()
    }

    return false
}
function clearDeafult(a) {
    if (a.defaultValue == a.value) {
        a.value = ''
    }
}
function remove() {

	// Confirmation popup added when removing a task 
	var confirmation = confirm("Do you want to delete the task?");
	if (confirmation == true) {
		var id = this.getAttribute('id')
		var todos = get_todos()
		todos.splice(id, 1)
		localStorage.setItem('todo', JSON.stringify(todos))
		show()
	}
	else {
      show()
	}	

    

    return false
}

function jsFunction() {
  //document.getElementById("js").submit();
  var first_number = parseInt(document.getElementById("val1").value);
  var second_number = parseInt(document.getElementById("val2").value);
  var result = first_number + second_number;
  document.getElementById("mathRes").innerHTML = "Value:" + result;
  if (Number.isInteger(result) ==false)
      document.getElementById("mathRes").innerHTML = "Must add numbers! -_-"
}

function show() {
    var todos = get_todos()
    var html = '<ul>'
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '"> <i class="fa fa-trash" ></i> Delete</button> </li>'
    }
    html += '</ul>'

//new line
    document.getElementById('todos').innerHTML = html
    var buttons = document.getElementsByClassName('remove')
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove)
    }
	//remove the textbox text if add_task is clicked
	var task_text = document.getElementById('input_btn')
	task_text.value = ''
	
}
document.getElementById('btn').addEventListener('click', add)
