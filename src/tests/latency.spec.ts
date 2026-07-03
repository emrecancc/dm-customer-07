import { request } from '../src/api';

describe('API latency', () => {
  it('responds within 700ms', async () => {
    const start = Date.now();
    await request('/endpoint');
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(700);
  });
});