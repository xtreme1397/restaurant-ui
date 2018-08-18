import { OrdersModule } from './orders.module';

describe('TablesModule', () => {
  let orderModule: OrdersModule;

  beforeEach(() => {
    orderModule = new OrdersModule();
  });

  it('should create an instance', () => {
    expect(orderModule).toBeTruthy();
  });
});
