import { Outlet, useMatch } from 'react-router-dom';
import { TaskCreatePage } from './TaskCreatePage';

export const TasksPage = () => {
	const isTask = useMatch('/task/:id');

	return (
		<>
			{isTask ? <Outlet /> : <TaskCreatePage />}
		</>
	);
};
