import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('HeartHandshake', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 3.333C9 2.333 9.826 2 11 2a3.667 3.667 0 0 1 3.666 3.667c0 1.526-1.006 2.693-2 3.666L8 14 3.333 9.333c-1-.966-2-2.133-2-3.666A3.667 3.667 0 0 1 5 2c1.173 0 2 .333 3 1.333Zm0 0L6.026 5.307a1.447 1.447 0 0 0 0 2.053 1.45 1.45 0 0 0 2 .047l1.38-1.267a1.88 1.88 0 0 1 2.527 0l1.973 1.773M12 10l-1.334-1.333M10 12l-1.334-1.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
