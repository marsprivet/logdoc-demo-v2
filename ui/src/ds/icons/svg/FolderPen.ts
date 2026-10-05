import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('FolderPen', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.333 7.667V3.333A1.333 1.333 0 0 1 2.666 2h2.6c.467 0 .867.2 1.134.6l.533.8c.267.4.667.6 1.133.6h5.267a1.333 1.333 0 0 1 1.333 1.333V12a1.333 1.333 0 0 1-1.333 1.333H7m.585-4.249a1.416 1.416 0 0 0-2.003-2.003l-3.34 3.342a1.333 1.333 0 0 0-.337.569l-.558 1.913a.334.334 0 0 0 .413.414l1.914-.558c.215-.063.41-.18.569-.338l3.342-3.339Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
