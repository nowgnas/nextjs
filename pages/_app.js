// _app js 는 가장 먼저 호출된다

import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <span>hello</span>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
            text-decoration = none;
        }
      `}</style>
    </div>
  );
}
