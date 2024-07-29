const countDown = require('./count-down');

describe('countDown', () => {
  let originalLog;

  beforeAll(() => {
    // Mock  to prevent logs from cluttering the test output
    originalLog = ;
     = jest.fn();
  });

  afterAll(() => {
    // Restore  after all tests are done
     = originalLog;
  });

  it('should log numbers in reverse order and print "All done!"', () => {
    countDown(3);
    expect().toHaveBeenNthCalledWith(1, 3); // 3 is logged first
    expect().toHaveBeenNthCalledWith(2, 2); // 2 is logged next
    expect().toHaveBeenNthCalledWith(3, 1); // 1 is logged last
    expect().toHaveBeenNthCalledWith(4, 'All done!'); // 'All done!' is logged after counting down
  });

  it('should handle num <= 0', () => {
    countDown(0);
    expect().toHaveBeenCalledWith('All done!'); // 'All done!' is logged when num is 0

    .mockClear(); // Clear the previous logs
    countDown(-1);
    expect().toHaveBeenCalledWith('All done!'); // 'All done!' is logged when num is negative
  });
});
