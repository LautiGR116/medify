import React from 'react';
import type { SVGProps } from 'react';

export function TablerPillFilled(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" transform="rotate(-45)" {...props}><path fill="currentColor" d="M20.207 3.793a5.95 5.95 0 0 1 0 8.414l-8 8a5.95 5.95 0 0 1-8.414-8.414l8-8a5.95 5.95 0 0 1 8.414 0m-7 1.414L8.913 9.5l5.586 5.586l4.294-4.292a3.95 3.95 0 1 0-5.586-5.586"></path></svg>);
}

export function SystemUiconsPill(props: SVGProps<SVGSVGElement>) {
	return (<svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 21 21" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 7.5v5.817m-7-2.817a3 3 0 0 0 3 3h8a3 3 0 0 0 0-6h-8a3 3 0 0 0-3 3"></path></svg>);
}