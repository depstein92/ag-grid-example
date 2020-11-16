
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { 
  render, 
  screen, 
  act, 
  waitForElementToBeRemoved,
  waitFor, 
  fireEvent
} from '@testing-library/react';
import { ExpansionPanelActions } from '@material-ui/core';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('Table should have 9 columns', () => {
   
});

test('Table should have 500 rows', async () => {
  render(<App />)  
  const parentGrid = screen.getByTestId('parentGrid')
  expect(parentGrid).not.toBeEmpty()
  const bodyViewPort = document.querySelector(
    'div.ag-pinned-left-cols-container'
  )
  bodyViewPort.addEventListener('scroll', () => {});
  fireEvent.scroll(bodyViewPort, { target: { scrollY: 40000 }})
  const lastNode = document.querySelector("[row-index='499'");
  expect(lastNode).not.toBeEmpty()
});


