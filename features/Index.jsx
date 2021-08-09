import React, { useState, useEffect, useCallback } from 'react';
import { Container, Grid } from '@material-ui/core';
import NewTask from './newTask';
import Tasks from './tasks';
import useHttp from '../hooks/use-http';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transferedTasks = (taskObj) => {
      const loadedTasks = [];

      for (const taskKey in taskObj) {
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };
    fetchTasks(
      {
        url: 'https://udemy-app-2dac9-default-rtdb.firebaseio.com/tasks.json',
      },
      transferedTasks
    );
  }, [fetchTasks]);

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
