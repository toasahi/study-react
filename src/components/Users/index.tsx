import { useUsers } from '@/src/hooks/useUsers';
import classes from '@/src/components/Users/Users.module.css'

export const Users = () =>{
  
  const {users,userError,isEmpty,isLoading} = useUsers()

  if(isLoading){
    return <div>ローディング</div>
  }
  if(userError){
    return <div>{userError.message}</div>
  }
  if(users && isEmpty){
    return <div>データは空です</div>
  }

  return (
    <>
      <ul className={classes.users}>
      {users?.map((user)=>{
        return(
          <li key={user.id}>{user.name}</li>
        )
      })}
      </ul>
    </>
  )
}