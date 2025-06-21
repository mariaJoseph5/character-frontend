import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  const pipe = new CapitalizePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should capitalize lower case', () => {
    var value = 'rachel';
    var updatedValue = pipe.transform(value);
    expect(updatedValue).toBe('Rachel');
  });
  it('should capitalize title case', () => {
    var value = 'Rachel';
    var updatedValue = pipe.transform(value);
    expect(updatedValue).toBe('Rachel');
  });
  it('should capitalize upper case', () => {
    var value = 'RACHEL';
    var updatedValue = pipe.transform(value);
    expect(updatedValue).toBe('RACHEL');
  });
  it('should capitalize lower case', () => {
    var value = 'rachel';
    var updatedValue = pipe.transform(value);
    expect(updatedValue).toBe('Rachel');
  });
  it('should capitalize title case', () => {
    var value = 'Rachel';
    var updatedValue = pipe.transform(value);
    expect(updatedValue).toBe('Rachel');
  });
  it('should capitalize lower case', () => {
    var value = 'rACHEL';
    var updatedValue = pipe.transform(value);
    expect(updatedValue).toBe('RACHEL');
  });
  it('should not capitalize number', () => {
    var value = '123';
    var updatedValue = pipe.transform(value);
    expect(updatedValue).toBe('123');
  });
  it('should not capitalize symbols', () => {
    var value = '#$*';
    var updatedValue = pipe.transform(value);
    expect(updatedValue).toBe('#$*');
  });
});
