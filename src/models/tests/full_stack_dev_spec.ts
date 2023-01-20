import { Dev, FullStackDevStore } from '../full_stack_dev';

const devStore = new FullStackDevStore();

describe('Fullstack Developers Model', () => {
  it('should have an index method', () => {
    expect(devStore.index).toBeDefined();
  });

  it('index method should return a list of products', async () => {
    const result = await devStore.index();
    expect(result).toEqual([]);
  });
});
