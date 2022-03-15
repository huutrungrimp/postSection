const authServices = () => {

  if (localStorage.getItem('token') && localStorage.getItem('userDetail')) {
    const userToken = localStorage.getItem('token');

    const userDetail=localStorage.getItem('userDetail');
    const userDetailJson = JSON.parse(userDetail);
    const username = userDetailJson.username;

    console.log(username, userToken)

    return {    
      userToken: userToken,
      username: username,
    }
  }
  
  return {    
    userToken: '',
    username: '',
  };
 
}

export default authServices
