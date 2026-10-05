import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Fish', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12 8v.333m-1.333 3.62a6.513 6.513 0 0 1 0-7.906m-6 3.066c0-1.78-.947-3.133-2.847-3.446-.666 1-.666 3.333.154 4.333-.827 1-.827 3.333-.154 4.333 1.9-.313 2.847-1.666 2.847-3.446M6.974 4.84C6.8 3.92 6.114 2.827 5.334 2H9.2a1.333 1.333 0 0 1 1.32 1.113l.154.934m0 7.906-.154.934A1.333 1.333 0 0 1 9.2 14H6.334c.646-.732 1-1.677.993-2.653M4.334 8C4.96 5.693 7.627 4 10 4c2.374 0 4.04 1.693 4.667 4-.627 2.313-2.293 4-4.667 4-2.373 0-5.04-1.687-5.666-4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
