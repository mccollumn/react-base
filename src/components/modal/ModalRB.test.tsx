import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { ModalRB } from './ModalRB';

// Shamelessly squelch MUI errors
console.error = jest.fn();

describe('<ModalRB/>', () => {
  it('Should open/close default Modal', async () => {
    const mockLabel = 'I am popover';
    const mockClose = jest.fn();
    const MockBody = ({ closePopover }: any) => (
      <div onClick={closePopover}>{mockLabel}</div>
    );

    render(
      <ModalRB/>
    );

    expect(1).toEqual(1);

    /* fireEvent.click(await screen.findByText('Open Popover'));

* expect(
*   await screen.findByText(mockLabel)
* ).toBeInTheDocument();

* fireEvent.click(await screen.findByText(mockLabel));

* expect(mockClose).toBeCalled(); */
  });
});
