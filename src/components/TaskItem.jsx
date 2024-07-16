import { Link } from "react-router-dom";

export const TaskItem = ({ id, index, title }) => {
	return (
		<li className="tasks-list__item">
			<Link className="tasks-list__link" to={`/task/${id}`}>
				<div className="tasks-list__title" data-num={index + 1}>
					<span className="tasks-list__label">{title}</span>
				</div>
			</Link>
		</li>
	);
};
