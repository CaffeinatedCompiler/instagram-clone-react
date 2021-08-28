import { useAppSelector } from '../../hooks/hooks';
import HomeBox from '../../components/HomeBox/HomeBox';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import Post from '../../components/Post/Post';
import Suggestions from '../../components/Suggestions/Suggestions';
import './Home.scss';

export default function Home() {
  const posts = useAppSelector((state) => state.posts);
  return (
    <HomeBox>
      <div className="feed">
        <div className="posts">
          {posts.map((post) => (
            <Post
              userImage={post.userimage}
              username={post.username}
              postImage={post.image}
              postDescription={post.description}
            />
          ))}
          <BottomNavigation />
        </div>
        <div className="widgets">
          <Suggestions />
        </div>
      </div>
    </HomeBox>
  );
}
