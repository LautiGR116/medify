import React from 'react';
import type { SVGProps } from 'react';

export function MynauiCalendar(props: SVGProps<SVGSVGElement>) {
	return (<svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke={props.color || "currentColor"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 5V3m-9 2V3M3.25 8h17.5M3 10.044c0-2.115 0-3.173.436-3.981a3.9 3.9 0 0 1 1.748-1.651C6.04 4 7.16 4 9.4 4h5.2c2.24 0 3.36 0 4.216.412c.753.362 1.364.94 1.748 1.65c.436.81.436 1.868.436 3.983v4.912c0 2.115 0 3.173-.436 3.981a3.9 3.9 0 0 1-1.748 1.651C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.412a3.9 3.9 0 0 1-1.748-1.65C3 18.128 3 17.07 3 14.955z"></path></svg>);
}

export function MdiProgressStar(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M13 2v2c4.39.54 7.5 4.53 6.96 8.92A8.014 8.014 0 0 1 13 19.88v2c5.5-.6 9.45-5.54 8.85-11.03C21.33 6.19 17.66 2.5 13 2m-2 0c-1.96.18-3.81.95-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68v-2M4.26 5.67A9.8 9.8 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9zM2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8 8 0 0 1 4.06 13zm5 5.37l-1.39 1.37A10 10 0 0 0 11 22v-2a8 8 0 0 1-3.9-1.63zm1.52-1.57l.92-3.89l-3-2.58l3.95-.37L12 6.35L13.55 10l3.95.33l-3 2.58l.92 3.89L12 14.74z"></path></svg>);
}

export function MageCalendarFill(props: SVGProps<SVGSVGElement>) {
	return (<svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill={props.fill || "none"} stroke="currentColor" d="M17.75 3.935v-1.31a.75.75 0 1 0-1.5 0v1.25h-8.5v-1.25a.75.75 0 1 0-1.5 0v1.31a4.76 4.76 0 0 0-4 4.69v8.75A4.75 4.75 0 0 0 7 22.125h10a4.75 4.75 0 0 0 4.75-4.75v-8.75a4.76 4.76 0 0 0-4-4.69m2.5 5.94H3.75v-1.25a3.24 3.24 0 0 1 2.5-3.15v1.15a.75.75 0 0 0 1.5 0v-1.25h8.5v1.25a.75.75 0 1 0 1.5 0v-1.15a3.24 3.24 0 0 1 2.5 3.15z"></path></svg>);
}