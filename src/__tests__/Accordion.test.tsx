/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import Accordion from '../components/Accordion'
import React from 'react'
test('is rendered', () => {
  render(<Accordion anim={true}>a</Accordion>)
  expect(screen.getByText('a')).toBeDefined()
})
