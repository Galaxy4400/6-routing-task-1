import './styles/app.scss';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Page404 } from './pages/404';
import { TasksPage } from './pages/TasksPage';
import { TaskPage } from './pages/TaskPage';

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MainPage/>} />
			<Route path="/task" element={<TasksPage/>}>
				<Route path=":id" element={<TaskPage/>} />
			</Route>
			<Route path="*" element={<Page404 />} />
		</Routes>
	);
};
