import { Post } from '@/src/components/Post';
import classes from '@/src/styles/Home.module.css'

const PostId = () =>{
  return (
    <div className={classes.container}>
      <Post/>
    </div>
  )
}

export default PostId