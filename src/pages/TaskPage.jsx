import { useNavigate } from 'react-router-dom';
import { useDeleteTask, useGetTask, useUpdateTask } from '../hooks';

export const TaskPage = () => {
	const { task, isLoading } = useGetTask();
	const { removeHandler, isDeleting } = useDeleteTask();
	const { updateHandler, isUpdating } = useUpdateTask();

	const navigate = useNavigate();

	const loadingClass = isLoading || isDeleting || isUpdating ? 'loading' : '';

	const { id, title } = task;

	return (
		<div className="block">
			<div className={`task ${loadingClass}`}>
				<div className="task__head">
					<h2 className="task__title">ID задачи: {id}</h2>
					<button className="task__remove button button_remove" type="button" onClick={() => removeHandler(id)}>
						Удалить
					</button>
				</div>
				<form className="task__form task-form" onSubmit={updateHandler}>
					<input type="hidden" name="id" defaultValue={id} />
					<div className="task-form__row">
						<textarea className="task-form__input input" name="title" defaultValue={title} />
					</div>
					<div className="task-form__actions">
						<button className="task-form__button button" type="button" onClick={() => navigate(-1)}>
							Назад
						</button>
						<button className="task-form__button button" type="submit">
							Сохранить
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
