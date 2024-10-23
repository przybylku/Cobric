/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import Accordion, {
  AccordionBody,
  AccordionHeader,
  AccordionItem
} from '../components/Accordion'
import React from 'react'
describe('Accordion', () => {
  render(
    <Accordion anim={true}>
      <AccordionItem>
        <AccordionHeader>test</AccordionHeader>
        <AccordionBody>
          <p>tego typu</p>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  )
  it('should be render', () => {
    expect(document.getElementsByClassName('acccordtion-body')).toBeDefined()
    expect(screen.getByText('tego typu')).toBeDefined()
  })
})
