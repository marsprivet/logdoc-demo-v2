import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('AlarmSmoke', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M7.333 14c0-1.667 1.333-1.667 1.333-3.333m2 3.333c0-1.667 1.334-1.667 1.334-3.333m.666-5.334-.533 2a.833.833 0 0 1-.8.667H4.666a.833.833 0 0 1-.8-.667l-.533-2M4 14c0-1.667 1.333-1.667 1.333-3.333M14 2a.667.667 0 0 1 .666.667V4a1.333 1.333 0 0 1-1.333 1.333H2.666A1.333 1.333 0 0 1 1.333 4V2.667A.667.667 0 0 1 2 2h12Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
