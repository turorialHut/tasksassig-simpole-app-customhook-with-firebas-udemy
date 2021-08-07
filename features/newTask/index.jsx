import React, { useState } from 'react';
import NewTaskForm from './newTaskForm';

const NewTask = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const enterTaskHandler = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://udemy-app-2dac9-default-rtdb.firebaseio.com/tasks.json',
        {
          method: 'POST',
          body: JSON.stringify({ text: taskText }),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }
      const data = await response.json();
      const generatedID = data.name;
      const createdTask = { id: generatedID, text: taskText };
      props.onAddTask(createdTask);
    } catch (error) {
      setError(error.message || 'Form upload error');
    }
    setIsLoading(false);
  };

  return (
    <>
      <NewTaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </>
  );
};

export default NewTask;
