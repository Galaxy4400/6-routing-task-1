import './styles/app.scss';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Page404 } from './pages/404';
import { useState } from 'react';
import { TasksPage } from './pages/TasksPage';
import { TaskPage } from './pages/TaskPage';

export const App = () => {
	const [refreshTasksFlag, setRefreshTasksFlag] = useState(false);

	const refreshTasks = () => setRefreshTasksFlag(!refreshTasksFlag);

	return (
		<Routes>
			<Route path="/" element={<MainPage {...{refreshTasksFlag, refreshTasks}} />} />
			<Route path="/task" element={<TasksPage {...{refreshTasks}}/>}>
				<Route path=":id" element={<TaskPage/>} />
			</Route>
			<Route path="*" element={<Page404 />} />
		</Routes>
	);
};
