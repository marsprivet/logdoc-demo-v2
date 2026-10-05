import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('GraduationCap', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14.666 6.667v4M4 8.333v2.334c0 .53.421 1.039 1.171 1.414s1.768.586 2.829.586c1.06 0 2.078-.211 2.828-.586S12 11.197 12 10.667V8.333m2.28-1.052a.667.667 0 0 0-.013-1.225L8.553 3.453a1.333 1.333 0 0 0-1.106 0l-5.714 2.6a.667.667 0 0 0 0 1.222L7.447 9.88a1.333 1.333 0 0 0 1.106 0l5.727-2.599Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
