import { useEffect, useState } from "react";
import { TASKS_RESORURSE } from "../constants/tasks-resourse";
import { useParams } from "react-router-dom";

export const useGetTask = () => {
	const [task, setTask] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const { id } = useParams();

	useEffect(() => {
		setIsLoading(true);

		fetch(`${TASKS_RESORURSE}/${id}`)
			.then(response => response.json())
			.then(result => {
				setTask(result);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [id]);

	return { task, isLoading };
};
