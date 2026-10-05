import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Biohazard', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 9.267A1.333 1.333 0 1 0 8 6.6a1.333 1.333 0 0 0 0 2.667Zm0 0v1.066M4.466 2.267c-.6 1.666 0 3.466 1.467 4.466m0 0c-1.6-.733-3.467-.333-4.6 1m4.6-1 .933.534m4.667-5c.6 1.666 0 3.466-1.467 4.466m0 0c1.6-.8 3.467-.4 4.6 1m-4.6-1-.933.534m2 6.6A3.707 3.707 0 0 1 8 10.333m0 0c-.134 1.734-1.4 3.2-3.134 3.467M9 3.6a5.05 5.05 0 0 0-2 0m4.333 7.333c.467-.466.8-1.066 1-1.666m-8.667 0c.2.6.534 1.2 1 1.666",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
