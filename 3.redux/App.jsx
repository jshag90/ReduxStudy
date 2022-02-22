import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(loginIn({ id: "zerocho", password: "비밀번호" }));
  }, []);

  return (
    <div>
      {user ? <div>{user.nickname}</div> : "로그인 해주세요."}
      <button onClick={onClick}>로그인</button>
    </div>
  );
};

export default App;
