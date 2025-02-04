import { render } from '@testing-library/react';
import OrderStatus from '@/components/order-status';

describe('Order Status', () => {
  it('should display the right text when order status is pending', () => {
    const wrapper = render(<OrderStatus status="pending" />);

    wrapper.debug();

    const statusText = wrapper.getByText('Pendente');

    const badgeElement = wrapper.getByTestId('badge');

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-slate-400');
  });

  it('should display the right text when order status is canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />);

    wrapper.debug();

    const statusText = wrapper.getByText('Cancelado');

    const badgeElement = wrapper.getByTestId('badge');

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-rose-500');
  });
});
