import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Bath', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6 4 4.333 2.333A1 1 0 0 0 3.666 2c-.544 0-1 .455-1 1v8.333A1.333 1.333 0 0 0 4 12.667h8a1.333 1.333 0 0 0 1.333-1.334V8M6.666 3.333 5.333 4.667M1.333 8h13.333m-10 4.667V14m6.667-1.333V14",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
