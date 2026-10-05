import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Gift', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 5.333V14m0-8.667c-.241-.993-.656-1.843-1.192-2.438C6.273 2.301 5.643 1.99 5 2a1.667 1.667 0 1 0 0 3.333m3 0c.241-.993.656-1.843 1.192-2.438C9.727 2.301 10.357 1.99 11 2a1.667 1.667 0 1 1 0 3.333M12.667 8v4.667A1.333 1.333 0 0 1 11.333 14H4.667a1.334 1.334 0 0 1-1.334-1.333V8m-.666-2.667h10.666c.368 0 .667.299.667.667v1.333a.667.667 0 0 1-.667.667H2.667A.667.667 0 0 1 2 7.333V6c0-.368.298-.667.667-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
