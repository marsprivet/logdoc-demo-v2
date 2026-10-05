import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('BookHeart', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.667 13V3a1.667 1.667 0 0 1 1.667-1.667h8.333a.667.667 0 0 1 .667.667v12a.667.667 0 0 1-.667.667H4.334A1.667 1.667 0 0 1 2.667 13Zm0 0a1.667 1.667 0 0 1 1.667-1.667h9m-2.667-5.866A1.48 1.48 0 0 0 9.2 4c-.533 0-.933.2-1.2.6-.266-.4-.666-.6-1.2-.6a1.48 1.48 0 0 0-1.466 1.467c0 .4.2.8.466 1.066.726.719 1.46 1.43 2.2 2.134.738-.685 1.47-1.374 2.2-2.067.3-.301.467-.709.467-1.133Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
