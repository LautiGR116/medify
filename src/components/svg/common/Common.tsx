import React from 'react';
import type { SVGProps } from 'react';

export function RoundedArrow(props: SVGProps<SVGSVGElement>) {
    return <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 1024 1024"><path fill="currentColor" d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496"/></svg>
}

export function EmptyBox(props: SVGProps<SVGSVGElement>) {
    return <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M12.5 2h-10a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5m-10-1A1.5 1.5 0 0 0 1 2.5v10A1.5 1.5 0 0 0 2.5 14h10a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 12.5 1z" clip-rule="evenodd"/></svg>
}

export function CheckBox(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            className={props.className}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="4 4 16 16"
        >
            <path
                fill="currentColor"
                d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m7.003 13l7.07-7.071l-1.413-1.414l-5.657 5.657l-2.829-2.829l-1.414 1.414z"
            />
        </svg>
    );
}