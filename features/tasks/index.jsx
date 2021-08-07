import React from 'react';
import Typography from '../../Components/Typography';
import Card from '../../Components/Card';
import Button from '../../Components/Button';

const Tasks = (props) => {
  let taskList = <Typography>No task found. Start adding something</Typography>;

  if (props.items.length > 0) {
    taskList = props.items.map((task) => (
      <Typography key={task.id}>{task.text}</Typography>
    ));
  }

  let content = taskList;
  if (props.error) {
    content = <Button onClick={props.onFetch}>Try again</Button>;
  }
  if (props.loading) {
    content = 'Loading content...';
  }

  return <Card>{content}</Card>;
};

export default Tasks;
