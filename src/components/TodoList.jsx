import React, { useState } from 'react';
import { Box, Input, Button, List, ListItem, ListIcon, IconButton } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Box mt="4" maxWidth="400px" mx="auto">
      <Input
        placeholder="Add a new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
      />
      <Button onClick={handleAddTodo} colorScheme="blue" mt="2">Add Todo</Button>
      <List spacing={3} mt="4">
        {todos.map((todo, index) => (
          <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center">
            {todo}
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