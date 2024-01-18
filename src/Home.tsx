import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <Link to='/about'>About</Link>
      <br/>
      <Link to='/query-string?hoge=hoge&fuga=fuga&fizz=fizz&bizz=bizz'>QueryString</Link>
    </div>
  )
}

export default Home;
