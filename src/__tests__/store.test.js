import store from '../store';

describe('Store Test', () => {
  it('should be defined', () => {
    let storeResult = store();

    expect(storeResult).toBeDefined();
  });
});
