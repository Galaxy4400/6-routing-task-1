import { useState } from "react";
import { TASKS_RESORURSE } from "../constants/tasks-resourse";
import { useNavigate } from "react-router-dom";


export const useDeleteTask = () => {
	const [isDeleting, setIsDeleting] = useState(false);

	const navigate = useNavigate();

	const removeHandler = (taskId) => {
		setIsDeleting(true);

		fetch(`${TASKS_RESORURSE}/${taskId}`, {
			method: 'DELETE'
		})
		.then(() => {
			navigate('/');
		})
		.finally(() => {
			setIsDeleting(false);
		});
	}

	return { removeHandler, isDeleting };
};
