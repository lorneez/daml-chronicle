
export function setAuthentication(auth) {
  window.localStorage.setItem("accessToken", JSON.stringify(auth.accessToken));
  window.localStorage.setItem("expiresIn", JSON.stringify(auth.expiresIn));
  window.localStorage.setItem("expiresDate", JSON.stringify(auth.expiresDate));
};

export function getAuthentication() {
  const accessToken = window.localStorage.getItem("accessToken");
  const expiresIn = window.localStorage.getItem("expiresIn");
  const expiresDate = window.localStorage.getItem("expiresDate");
  if(accessToken != null && expiresIn != null && expiresDate != null) {
    return {
      isSignedIn: true,
      accessToken: JSON.parse(accessToken),
      expiresIn: JSON.parse(expiresIn),
      expiresDate: JSON.parse(expiresDate),
    };
  }
  console.log("local storage empty");
  return null;
};

export function clearAuthentication() {
  window.localStorage.removeItem("accessToken");
  window.localStorage.removeItem("expiresIn");
  window.localStorage.removeItem("expiresDate");
};

export function validateAuthentication() {
  // Get time until expire
  const expiresDate = window.localStorage.getItem("expiresDate");
  // Get time now
  var now = Math.floor(new Date().getTime() / 1000);

  return now < expiresDate ? true : false;
}

export default {
  setAuthentication,
  getAuthentication,
  clearAuthentication,
  validateAuthentication
};
