import React, { useState, useEffect, useCallback } from 'react';
import { Container, Grid } from '@material-ui/core';
import NewTask from './newTask';
import Tasks from './tasks';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://udemy-app-2dac9-default-rtdb.firebaseio.com/tasks.json'
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      console.log(data);

      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <Container maxWidth='xs'>
      <Grid container spacing={2} direction='column'>
        <Grid item xs>
          <NewTask onAddTask={taskAddHandler} loading={isLoading} />
        </Grid>
        <Grid item xs>
          <Tasks
            items={tasks}
            loading={isLoading}
            error={error}
            onFetch={fetchTasks}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
