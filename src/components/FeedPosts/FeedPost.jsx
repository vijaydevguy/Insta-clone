import { Box, Image } from '@chakra-ui/react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'


const FeedPost = ({img,avatar,username}) => {
  return (
    <>
      <PostHeader username={username} img={img} avatar={avatar}/>
      <Box my={2}
      borderRadius={20}
      overflow={'hidden'}>
        <Image src={img} alt={username}/>
      </Box>
      <PostFooter username={username}/>
      
    </>
  )
}

export default FeedPost
