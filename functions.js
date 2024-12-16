function addTodoItem(){
    // here I'm taking what the user types.
    const userInput = document.getElementById("todoInput").value;

    // here I'm creating the list item containing the input value.
    const listItem = document.createElement("li");
    listItem.textContent = userInput;


}