import { TaskItem } from './TaskItem';

export const TasksList = ({ tasks, isLoading, isSearching }) => {
	const loadingClass = isLoading || isSearching ? 'loading' : '';
	const isNothing = !isLoading && !tasks.length;

	return (
		<>
			<ul className={`tasks-list ${loadingClass}`}>
				{tasks.map(({ id, title }, index) => (
					<TaskItem {...{ id, index, title }} key={id} />
				))}
			</ul>
			{isNothing && <div>Ничего не найдено</div>}
		</>
	);
};
