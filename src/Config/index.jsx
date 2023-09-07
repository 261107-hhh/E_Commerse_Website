// Save login details
export const loginData = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();

};

//checkLogin
export const checkLogin = () => {
  const data = localStorage.getItem("data");
  if (data) {
    const ob = JSON.parse(data);
    if (ob.token && ob.user) {
      return true;
    }
  }

  return false;
};

// get token
export const getToken = () => {
  if (checkLogin()) {
    const t = localStorage.getItem("data");
    console.log(JSON.parse(t).token)
    return JSON.parse(t).token;
  }
  else return null;
}

// get current user
export const getCurrentUser = () => {
  if (checkLogin()) {
    const user = JSON.parse(localStorage.getItem("data")).user;
    return user;
  } else {
    return null;
  }
};


export const isAdmin = () => {
  // let user = getCurrentUser();
  // let flag = user.roles.find(r => r.id === 5245)
  // return flag ? true : false;
  return false;
}

// Logout
export const removeLogindata = (next) => {
  localStorage.removeItem("data");
  next()
};


