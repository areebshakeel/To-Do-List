function addItem() {
    
    // Taking input from the user
    var inputValue=document.getElementById("userInput")
    // creating <li> by JS
    var listItem=document.createElement("LI")
    listItem.innerHTML="<span>"+inputValue.value+"</span>"
    // let array=[]
    // array.push(inputValue.value)
    

    // Bringing <ul> from HTML
    var list=document.getElementById("list")
    // Attaching the <li> created in JS to the HTML as a <ul child>
    list.appendChild(listItem)
    // Empty the input
    inputValue.value=""
    // Creating Delete button
    var deleteButton=document.createElement("BUTTON")
    deleteButton.innerHTML="Delete"
    deleteButton.setAttribute("onclick","deleteInput(event)")
    listItem.appendChild(deleteButton)
    //Creating Edit button
    var editButton=document.createElement("BUTTON")
    editButton.innerHTML="Edit"
    editButton.setAttribute("onClick","editInput(event)")
    listItem.appendChild(editButton)
    

}

function deleteInput(event) {

    // Getting the element from the listItem
    var listItem=event.target.parentElement
    // Deleting the element
    listItem.remove()

    
}

function editInput(event) {
    // getting the value from <li> to the user input
    var valueElement=event.target.parentElement.children[0]
    
    document.getElementById("userInput").value=valueElement.innerHTML
    valueElement.setAttribute('id','current-edit')

    var inputArea=document.getElementById("input-area")

    // var updateButton=document.createElement("BUTTON")
    // updateButton.innerHTML="Update"
    // updateButton.setAttribute('onClick', "updateItem()")
    // inputArea.appendChild(updateButton)

    var button=inputArea.children[1]
    button.value="Update"
    button.setAttribute("onClick","updateItem()")

    
}

function updateItem(){
    
    var inputValue=document.getElementById('userInput')
    var currentItem=document.getElementById('current-edit')
    currentItem.innerHTML=inputValue.value
    inputValue.value=''
    document.getElementById("")
    var changeUpdate=document.getElementById('input-area').children[1]
    console.log(changeUpdate)
    changeUpdate.value="Add"
    changeUpdate.setAttribute('onClick','addItem()')




}