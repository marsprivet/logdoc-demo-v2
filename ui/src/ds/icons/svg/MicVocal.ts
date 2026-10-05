import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('MicVocal', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m7.334 5.067-3.996 5.46a.667.667 0 0 0 .066.866l.545.545a.667.667 0 0 0 .876.058L10.06 8m.94 6.116c-.666-.45-1.418-.783-2.333-.783-1.372 0-2.619 1.571-4 1.334-1.381-.238-1.85-2.246-1-3m10.333-7a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.666 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
