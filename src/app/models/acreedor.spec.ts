import { Acreedor } from './acreedor';
import { Producto } from './producto';

describe('Acreedor', () => {
  it('should create an instance', () => {
    expect(new Acreedor(null, '',[])).toBeTruthy();
  });
});
