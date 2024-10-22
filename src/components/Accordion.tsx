import React from 'react'
import { AccordionProps } from '../types/types'

/**@typedef {import("./types/types").AccordionProps} AccordionProps */

// declare global {
//   namespace JSX {
//     interface AccordionNode extends React.ReactElement<any, any> {
//       name: string
//     }
//     interface p extends React.ReactElement<any, any> {
//       name: string
//     }
//   }
// }

/**
 * Creates Main component for Accordion
 * @param {boolean} anim - Accordion animation?
 * @param {React.ReactNode} children - Accordion children
 */
export default function Accordion({ anim, children }: AccordionProps) {
  return <div className='accordion'>{anim && children}</div>
}

/**
 *
 * @param {React.ReactNode} children Have to be a AccordrionHeader or AccordionBody
 * @returns {React.ReactNode} AccordionItem
 */
export function AccordionItem({ children }: { children: React.ReactNode }) {
  return <div className='accordion-item'>{children}</div>
}

export function AccordionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className='accordion-header'>
      <p className='accordion-header-p'>{children}</p>
    </div>
  )
}

export function AccordionBody({ children }: { children: React.ReactNode }) {
  return <div className='accordion-body'>{children}</div>
}
