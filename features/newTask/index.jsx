import React, { useState } from 'react';
import NewTaskForm from './newTaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText, taskData) => {
    const generatedID = taskData.name;
    const createdTask = { id: generatedID, text: taskText };
    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: 'https://udemy-app-2dac9-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: { text: taskText },
      },
      createTask.bind(null, taskText)
    );
  };
  return (
    <>
      <NewTaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </>
  );
};

export default NewTask;
