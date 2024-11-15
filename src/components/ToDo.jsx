import { useState } from "react";

const ToDo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const AddToDo = (event) => {
    event.preventDefault();
    // ye event.preventDefault se page refresh nhi hoga as default of html agar page refresh huwa to page saare value bhul jaata hai unless we store it in local or temp
    //remember very important
    //event.preventDefault() is called to prevent the default form submission behavior, which would normally refresh the page.


    if (input.trim()) {
        //if (input.trim()) { ... } checks if the input is not just whitespace. The trim() method removes any leading and trailing whitespace.

        //agar ... spread nhi kareenge toh todo ka ek bada sa new list banega or uske sath input add hoga but we need to separate todo isliye todo ke list element ko alag se todd kar jodte hai
      setTodo([...todo, input]); // Spread operator to add new item to array
      //bina todo ke kuch esa output ayega
      //manamanama -last 2nd element
        //jaags     -last element ek our submit me ye bhi ikhata ho gayega
    }
    setInput(""); // Clear the input field
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
//   Event Handling: The function receives an event parameter, which represents the change event triggered by the input field.

// State Update: setInput(event.target.value); updates the input state with the current value of the input field. event.target.value refers to the value entered by the user in the text field.

  return (
    <>
      <form onSubmit={AddToDo}>
        <input
          type="text"
          name="todo"
          id="todo"
          value={input}
          onChange={handleInputChange}
        />
        <input type="submit" value="Add" />
      </form>
      <h2>To do list:</h2>
      <ul>
        {todo.map((dos, index) => (<>
          <li key={index}>{dos}</li>
        </>
        ))}
      </ul>
    </>
  );
};

export default ToDo;

