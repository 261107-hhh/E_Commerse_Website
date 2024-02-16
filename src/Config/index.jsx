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
    else {
      return false;
    }
  }
  else {
    return false;
  }

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
  console.log("Check admin");
  let user = getCurrentUser();
  if (user) {
    let isAdmin = false;
    if ((user.role[0].id) === 1111) {
      isAdmin = true;
    }
    return isAdmin;

  }
  else return false;
  // let user = getCurrentUser();
  // let flag = user.roles.find(r => r.id === 5245)
  // return flag ? true : false;
  // return true;
  // return false;
}

// Logout
export const removeLogindata = (next) => {
  localStorage.removeItem("data");
  next()
};


