import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Pin', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 11.333v3.334M6 7.173a1.333 1.333 0 0 1-.74 1.194l-1.187.6a1.333 1.333 0 0 0-.74 1.193v.507a.667.667 0 0 0 .667.666h8a.667.667 0 0 0 .666-.666v-.507a1.333 1.333 0 0 0-.74-1.193l-1.186-.6A1.333 1.333 0 0 1 10 7.173V4.667A.667.667 0 0 1 10.666 4a1.333 1.333 0 1 0 0-2.667H5.333a1.333 1.333 0 1 0 0 2.667.667.667 0 0 1 .667.667v2.506Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
