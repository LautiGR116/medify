import React from 'react';
import type { SVGProps } from 'react';

export function MaterialSymbolsLightPill(props: SVGProps<SVGSVGElement>) {
	return (<svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill={props.color || "currentColor"} d="m15.642 14.91l2.997-3.002q.646-.646 1.003-1.498Q20 9.56 20 8.625q0-1.932-1.348-3.278T15.369 4q-.927 0-1.778.358q-.852.358-1.499 1.004L9.091 8.358zM8.632 20q.926 0 1.778-.358q.852-.357 1.498-1.003l3.002-2.997l-6.552-6.551l-2.996 3.001q-.646.646-1.004 1.498Q4 14.44 4 15.375q0 1.932 1.348 3.278T8.632 20"></path></svg>);
}