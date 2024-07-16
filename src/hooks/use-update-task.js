import { useState } from "react";
import { TASKS_RESORURSE } from "../constants/tasks-resourse";

export const useUpdateTask = () => {
	const [isUpdating, setIsUpdating] = useState(false);

	const updateHandler = (event) => {
		event.preventDefault();

		const $form = event.target;
		const formData = new FormData($form);

		const taskId = formData.get('id');

		setIsUpdating(true);

		fetch(`${TASKS_RESORURSE}/${taskId}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(Object.fromEntries(formData)),
		})
		.finally(() => {
			setIsUpdating(false);
		});
	};

	return { updateHandler, isUpdating };
};
