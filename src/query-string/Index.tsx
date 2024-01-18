import queryString from 'query-string';
import { Link, useLocation } from 'react-router-dom';

/**
 * UseQueryString
 * "query-string"でクエリストリングを使用する
 * https://github.com/sindresorhus/query-string
 */
const UseQueryString = () => {
  const { search } = useLocation();
  const parseQS = queryString.parse(search);
  console.log(parseQS);
  const parseQSKeys = Object.keys(parseQS);

  return (
    <div>
      <div>UseQueryString</div>
      <br />
      <div>
        const { search } = useLocation();<br />
        const parseQS = queryString.parse(search);<br />
        const parseQSKeys = Object.keys(parseQS);<br />
        {"parseQSKeys.map(key => <div>{`${key}：${parseQS[key]}"}
      </div>
      <br />
      {parseQSKeys.map(key => <div key={key}>{`${key}：${parseQS[key]}`}</div>)}
    </div>
  )
};

/**
 * UseURLSearchParams
 * "URLSearchParams"でクエリストリングを使用する
 */
const UseURLSearchParams = () => {
  const { search } = useLocation();
  const urlSearchParam = new URLSearchParams(search);
  const urlSearchParamKeys = [...urlSearchParam.keys()];

  return (
    <div>
      <div>UseURLSearchParams</div>
      <br />
      <div>
        const { search } = useLocation();<br />
        const urlSearchParam = new URLSearchParams(search);<br />
        const urlSearchParamKeys = [...urlSearchParam.keys()];<br />
        {"urlSearchParamKeys.map(key => <div>{`${key}：${urlSearchParam.get(key)}`}"}
      </div>
      <br />
      {urlSearchParamKeys.map(key => <div key={key}>{`${key}：${urlSearchParam.get(key)}`}</div>)}
    </div>
  )
}

const QueryString = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <br />
      <br />
      <UseQueryString />
      <br />
      <br />
      <UseURLSearchParams />
    </div>
  )
};

export default QueryString;
