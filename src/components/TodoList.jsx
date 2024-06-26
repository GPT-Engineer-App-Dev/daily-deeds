import React, { useState } from 'react';
import { Box, Input, Button, List, ListItem, ListIcon, IconButton } from '@chakra-ui/react';
import { FaTrash, FaEdit } from 'react-icons/fa';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState('');

  // Function to handle adding a new todo
  const handleAddTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  // Function to save the edited todo
  const handleSaveEdit = () => {
    if (editIndex !== -1) {
      const updatedTodos = todos.map((todo, index) => index === editIndex ? editText : todo);
      setTodos(updatedTodos);
      setEditIndex(-1);
      setEditText('');
    }
  };

  // Function to remove a todo from the list
  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Function to set the todo for editing
  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditText(todos[index]);
  };

  return (
    <Box mt="4" maxWidth="400px" mx="auto">
      <Input
        placeholder="Add a new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
      />
      <Button onClick={handleAddTodo} colorScheme="purple" mt="2">Add Todo</Button>
      <List spacing={3} mt="4">
        {todos.map((todo, index) => (
          <ListItem key={index} d="flex" m="6" justifyContent="space-between" alignItems="center" boxShadow="base">
            {editIndex === index ? (
              <Input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={handleSaveEdit}
                onKeyPress={(e) => e.key === 'Enter' && handleSaveEdit()}
              />
            ) : (
              <>
                {todo}
                <IconButton
                  icon={<FaEdit />}
                  onClick={() => handleEditTodo(index)}
                  aria-label="Edit todo"
                  colorScheme="blue"
                />
              </>
            )}
            <IconButton
              icon={<FaTrash />}
              onClick={() => handleRemoveTodo(index)}
              aria-label="Delete todo"
              colorScheme="red"
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TodoList;