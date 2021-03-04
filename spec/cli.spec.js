import { cli as cli } from '../src/cli';

describe('Cli function', () => {

  it('should return undefined', () => {
    let test = cli();
    expect(test).toBeUndefined();
  });
});
