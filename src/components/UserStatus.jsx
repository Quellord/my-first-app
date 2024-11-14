
const UserStatus = ({admin,log}) => {
  if(log && admin){
    return<h2>Welcome Admin</h2>
  }else if(log){
    return <h2>Welcome User</h2>
  }else return <h2>Sign in</h2>
}

export default UserStatus