import React from 'react';
import type { SVGProps } from 'react';

export function PhMinusFill(props: SVGProps<SVGSVGElement>) {
  return (<svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 104H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16"></path></svg>);
}

export function PhPlusFill(props: SVGProps<SVGSVGElement>) {
  return (<svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 104h-48v48a8 8 0 0 1-16 0v-48H72a8 8 0 0 1 0-16h48V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 0 16"></path></svg>);
}

export function MaterialSymbolsPillOutline(props: SVGProps<SVGSVGElement>) {
  return (<svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M8.625 21q-2.35 0-3.988-1.638T3 15.376q0-1.125.425-2.15T4.65 11.4l6.75-6.75q.8-.8 1.825-1.225T15.375 3q2.35 0 3.988 1.637T21 8.625q0 1.125-.425 2.15T19.35 12.6l-6.75 6.75q-.8.8-1.825 1.225T8.625 21m6.65-7.15l2.675-2.65q.5-.5.775-1.175t.275-1.4q0-1.5-1.062-2.562T15.375 5q-.725 0-1.4.275T12.8 6.05l-2.65 2.675zM8.625 19q.725 0 1.4-.275t1.175-.775l2.65-2.675l-5.125-5.125L6.05 12.8q-.5.5-.775 1.175T5 15.375q0 1.5 1.063 2.563T8.625 19"></path></svg>);
}

export function Clock(props: SVGProps<SVGSVGElement>) {
  return <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24"> <path fill="currentColor"  d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z"/> </svg>
}

export function HalfFilledPill(props: SVGProps<SVGSVGElement>) {
  return <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24"> <path fill="currentColor"  d="M20.207 3.793a5.95 5.95 0 0 1 0 8.414l-8 8a5.95 5.95 0 0 1-8.414-8.414l8-8a5.95 5.95 0 0 1 8.414 0m-7 1.414L8.913 9.5l5.586 5.586l4.294-4.292a3.95 3.95 0 1 0-5.586-5.586"/> </svg>
}