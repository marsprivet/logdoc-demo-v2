import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Hammer', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m10 8-5.582 5.582a1.414 1.414 0 0 1-2-2L8 6m4 4 2.667-2.667m-.333.334L13.057 6.39c-.25-.25-.39-.59-.39-.943v-.781L11.16 3.16A4 4 0 0 0 8.36 1.99L6 1.972l.613.547A4.12 4.12 0 0 1 8 5.6v1.067L9.333 8h.782c.353 0 .692.14.942.39l1.277 1.277",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
