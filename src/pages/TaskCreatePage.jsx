import { useNavigate } from 'react-router-dom';
import { useCreateTask } from '../hooks';

export const TaskCreatePage = () => {
	const { createHandler, isCreating } = useCreateTask();

	const navigate = useNavigate();

	const loadingClass = isCreating ? 'loading' : '';

	return (
		<div className="block">
			<form className={`tasks-form ${loadingClass}`} onSubmit={createHandler}>
				<input className="tasks-form__input input" name="title" type="text" />
				<button className="tasks-form__button button" type="submit" disabled={isCreating}>
					Добавить новую задачу
				</button>
			</form>
			<button className="button" onClick={() => navigate(-1)}>
				Назад
			</button>
		</div>
	);
};
