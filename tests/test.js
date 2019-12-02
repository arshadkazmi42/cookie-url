const { expect } = require('chai');

const CookieURL = require('../index');


describe('generate url from cookie', () => {
  it('should return undefined', () => {
    expect(CookieURL()).to.be.undefined;
  });
  it('should return url without www', () => {
    const cookie = {
      secure: false,
      domain: '.github.com',
      path: '/arshadkazmi42'
    };

    expect(CookieURL(cookie)).to.be.equal('http://github.com/arshadkazmi42');
  });
  it('should return https url without www', () => {
    const cookie = {
      secure: true,
      domain: '.github.com',
      path: '/arshadkazmi42'
    };

    expect(CookieURL(cookie)).to.be.equal('https://github.com/arshadkazmi42');
  });
  it('should return url without www', () => {
    const cookie = {
      secure: false,
      domain: '.github.com',
      path: '/arshadkazmi42'
    };

    expect(CookieURL(cookie, true)).to.be.equal('http://www.github.com/arshadkazmi42');
  });
  it('should return https url without www', () => {
    const cookie = {
      secure: true,
      domain: '.github.com',
      path: '/arshadkazmi42'
    };

    expect(CookieURL(cookie, true)).to.be.equal('https://www.github.com/arshadkazmi42');
  });
  it('should return url without www', () => {
    const cookie = {
      secure: false,
      domain: '.www.github.com',
      path: '/arshadkazmi42'
    };

    expect(CookieURL(cookie, true)).to.be.equal('http://www.github.com/arshadkazmi42');
  });
  it('should return https url without www', () => {
    const cookie = {
      secure: true,
      domain: '.www.github.com',
      path: '/arshadkazmi42'
    };

    expect(CookieURL(cookie, true)).to.be.equal('https://www.github.com/arshadkazmi42');
  });
});
