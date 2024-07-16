import { useState } from 'react';
import { useGetTasks, useSearchTasks } from '../hooks';
import { TasksList } from '../components/TasksList';
import { Link } from 'react-router-dom';

export const MainPage = () => {
	const [isSorting, setIsSorting] = useState(false);
	const [refreshTasksFlag, setRefreshTasksFlag] = useState(false);

	const refreshTasks = () => setRefreshTasksFlag(!refreshTasksFlag);

	const { tasks, setTasks, isLoading } = useGetTasks(refreshTasksFlag, isSorting);
	const { setSearchTerm, isSearching } = useSearchTasks(setTasks, refreshTasks, isSorting);


	return (
		<div className="tasks">
			<div className="tasks__head block">
				<h1 className="tasks-container__title">Список задач</h1>
				<Link className="tasks-container__link button" to="/task">Добавить задачу</Link>
			</div>
			<div className="tasks-container block">
				<div className="tasks-container__header">
					<button className="tasks-container__sort button" type="button" onClick={() => setIsSorting(!isSorting)} disabled={isLoading}>
						{isSorting ? `Отключить сортировку` : `Включить сортировку`}
					</button>
					<input
						className="tasks-container__search input"
						type="text"
						placeholder="Поиск..."
						onChange={({ target }) => setSearchTerm(target.value)}
					/>
				</div>
				<TasksList {...{ tasks, isLoading, isSearching }} />
			</div>
		</div>
	);
};
