import React from 'react';
import type { SVGProps } from 'react';

export function F7Shield(props: SVGProps<SVGSVGElement> & { children?: React.ReactNode }) {
    return (
        <svg className={props.className} version="1.1" viewBox="0 0 880 1096" width="100" height="125" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path transform="translate(426,3)"
                  d="m0 0h29l10 2 1 1 12 2 9 3 7 3 11 3 6 2 7 3 8 4 9 2 3 2 10 3 10 5 9 2 3 2 9 2 3 2 10 3 10 5 9 2 3 2 9 2 11 6 9 2 3 2 9 2 11 6 9 2 3 2 9 2 11 6 9 2 3 2 9 2 11 6 9 2 11 6 9 2 3 2 8 2 19 9 9 3 17 8 19 10 8 5 6 5v2l6 2 9 12 5 6 4 8 1 10v2l3 1 1 4v472l-1 20-3 3-1 20-2 3-2 14-2 3-2 13-3 7-6 18-8 16-9 17-5 7-3 5-4 5-3 6-7 7-5 9-56 56-7 3-11 11h-2v2l-7 3-10 10-7 4-10 7-11 8-7 4-8 7-10 6-9 6-8 4-10 7-11 7-8 6-11 6-9 6-12 6-8 6-12 6-10 7-14 8-30 18-18 10-10 6-23 11-6 2-4 1h-27l-2-2-9-2-16-8-11-6-4-4-7-3-17-9-4-4-7-3-9-5-4-4-9-4-8-5-3-3-9-4-8-5-3-3-9-4-8-5-3-3-8-4-4-4-9-4-8-5-3-3-8-4-4-4-8-4-4-4-8-4-4-4-8-4-4-4-8-4-4-4-8-4-8-8-7-3-9-9-8-4-12-12-5-2-10-9-45-45-5-8v-2h-2l-8-10-5-8-7-11-4-5-8-16-8-17-7-21-6-19-2-9-2-10-1-14h-2l-1-12v-474l1-17 3-9 6-12 6-8 3-5 7-7 6-3 8-6 5-3 13-8 10-3 20-10 8-2 12-6 8-2 12-6 7-1 5-3 7-1 4-3 7-3 10-3 12-6 8-2 12-6 7-1 5-3 7-1 5-3 8-4 7-1 5-3 7-1 4-3 7-3 9-2 5-3 7-1 5-3 8-4 7-1 5-3 7-1 4-3 7-3 9-2 7-3 24-8 10-4 8-2 12-4 7-2 10-1v-2z"/>
            <path transform="translate(142,396)"
                  d="m0 0h595l16 8 7 5v2l4 2 8 8 8 10 7 14 1 4v191l-1 4-2 1-1 28-2 7-1 2-1 13-10 30-3 10-9 17-6 9-7 10-4 6-6 7-4 4h-2l-2 7-21 21-5 2-12 11-8 7-5 3-10 9-5 4-7 4-5 4-5 3-9 8-6 3-9 6-10 7-9 6-11 7-3 3-6 3-11 7-13 8-5 3-14 9-13 8-5 3-9 7-6 3-11 7-12 7-8 5-11 6-6 5-9 1v2l-13 1-4-2-1-1-8-1-4-3-5-2-7-6-5-2-7-6-7-3-10-6-3-3-6-3-3-2v-2l-7-2-7-4-9-7-6-3-3-2v-2l-7-2-7-4-9-7-6-3-6-5-6-3-6-5-6-3-6-5-6-3-6-5-6-3-6-5-6-3-6-5-6-3-10-9-5-2-11-10-6-3-13-13-5-4-6-3-26-26-5-8-11-12-7-11-3-4-8-16-8-17-4-13-7-28-1-3-1-26-3-4v-204l3-5 2-8 4-5 5-5 5-8 3-3 7-4 13-8z"
                  fill="#FEFEFE"/>
            {props.children && <text x="50%" y="50%" textAnchor="middle" fill="black">{props.children}</text>}
        </svg>
    );
}