import React from 'react'
import { AccordionProps } from '../types/types'

/**@typedef {import("./types/types").AccordionProps} AccordionProps */

/**
 * Creates Main component for Accordion
 * @param {boolean} anim - Accordion animation?
 * @param {React.ReactNode} children - Accordion children
 */
export default function Accordion({ anim, children }: AccordionProps) {
  return <div className='accordion'>{anim && children}</div>
}
