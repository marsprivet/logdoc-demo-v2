import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('NotepadTextDashed', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.334 1.333V4M8 1.333V4m2.667-2.667V4m0-1.333H12A1.333 1.333 0 0 1 13.334 4v1.333m0 2.667v1.333m0 2.667v1.333A1.333 1.333 0 0 1 12 14.667h-.666m-2.667 0H7.334m-2.667 0H4a1.333 1.333 0 0 1-1.333-1.334V12m0-2.667V8m0-2.667V4A1.333 1.333 0 0 1 4 2.667h1.334m0 4h4m-4 2.666h5.333M5.334 12h3.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
