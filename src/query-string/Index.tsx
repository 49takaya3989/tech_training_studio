import queryString from 'query-string';

const QueryString = () => {
  const arr = ['hoge'];
  const obj = {fuga: 'fuga', bizz: 'bizz'};
  const qs = queryString.stringify({arr, ...obj});

  return (
    <div>
      <div>QueryString</div>
      <div>qs：{qs}</div>
    </div>
  )
};

export default QueryString;
