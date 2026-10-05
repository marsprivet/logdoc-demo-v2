import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ClipboardPenLine', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.334 2.667H4A1.333 1.333 0 0 0 2.667 4v9.333A1.333 1.333 0 0 0 4 14.667h8a1.333 1.333 0 0 0 1.334-1.334V13M10.667 2.667H12a1.333 1.333 0 0 1 1.154.666M5.334 12H6M6 1.333h4c.368 0 .667.299.667.667v1.333A.667.667 0 0 1 10 4H6a.667.667 0 0 1-.666-.667V2c0-.368.298-.667.666-.667Zm8.252 7.084a1.416 1.416 0 1 0-2.002-2.002L9.576 9.089a1.333 1.333 0 0 0-.337.57l-.558 1.913a.333.333 0 0 0 .413.413l1.914-.558c.215-.063.41-.178.569-.337l2.675-2.673Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
