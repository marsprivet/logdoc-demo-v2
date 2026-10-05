import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('SquareUserRound', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12 14a4 4 0 0 0-4-4m0 0a4 4 0 0 0-4 4m4-4a2.667 2.667 0 1 0 0-5.333A2.667 2.667 0 0 0 8 10ZM3.333 2h9.334C13.403 2 14 2.597 14 3.333v9.334c0 .736-.597 1.333-1.333 1.333H3.333A1.333 1.333 0 0 1 2 12.667V3.333C2 2.597 2.597 2 3.333 2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
