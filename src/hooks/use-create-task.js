import { useState } from "react";
import { TASKS_RESORURSE } from "../constants/tasks-resourse";
import { useNavigate } from "react-router-dom";

export const useCreateTask = () => {
	const [isCreating, setIsCreating] = useState(false);

	const navigate = useNavigate();

	const createHandler = (event) => {
		event.preventDefault();

		const $form = event.target;
		const formData = new FormData($form);

		setIsCreating(true);

		fetch(TASKS_RESORURSE, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(Object.fromEntries(formData.entries())),
		})
		.then(response => response.json())
		.then(({id}) => {
			$form.reset();
			navigate(`/task/${id}`);
		})
		.finally(() => {
			setIsCreating(false);
		});
	};

	return { createHandler, isCreating };
};
