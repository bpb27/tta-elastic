const [
  collusion,
  education,
  totalAsPresident,
] = require('./index');

describe('searches for stats', () => {
  test('collusion', () => {
    expect(collusion.body.query).toBeDefined();
    expect(collusion.name).toEqual('collusion');
    expect(collusion.terms.length > 0).toEqual(true);
  });

  test('education', () => {
    expect(education.body.query).toBeDefined();
    expect(education.name).toEqual('education');
    expect(education.terms.length > 0).toEqual(true);
  });

  test('totalAsPresident', () => {
    expect(totalAsPresident.body.query).toBeDefined();
    expect(totalAsPresident.name).toEqual('totalAsPresident');
    expect(totalAsPresident.terms.length > 0).toEqual(false);
  });
});
