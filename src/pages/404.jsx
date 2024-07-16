import { Link } from "react-router-dom";

export const Page404 = () => {
	return (
		<div className="page-404 block">
			<h1 className="page-404__title">404</h1>
			<Link className="page-404__button button" to="/">На главную</Link>
		</div>
	);
};
