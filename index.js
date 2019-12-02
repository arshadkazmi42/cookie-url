module.exports = (cookie, wwwPrefix) => {

  // no cookie passed
  // return
  if (!cookie) {
    return;
  }

  // formats protocol, www prefix, domain, path
  // based on the cookie values
  return (
    // Formats protocol based on cookie secure flag
    `${cookie.secure ? 'https' : 'http'}://` +
    // formats www prefix based on wwwPrefix variable
    `${wwwPrefix && !cookie.domain.includes('www.') ? 'www.' : ''}` +
    // formats domain from cookie
    `${cookie.domain.charAt(0) === '.' ? cookie.domain.slice(1, cookie.domain.length) : cookie.domain}` +
    // formats url path from cookie
    `${cookie.path ? cookie.path : ''}`
  );
};
