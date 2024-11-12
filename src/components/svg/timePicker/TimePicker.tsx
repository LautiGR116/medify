import React from 'react';
import type { SVGProps } from 'react';

export function MynauiPlusCircle(props: SVGProps<SVGSVGElement>) {
	return (<svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-5.5 0H12m0 0H8.5m3.5 0V8.5m0 3.5v3.5"></path></svg>);
}