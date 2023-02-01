import { useDispatch, useSelector } from "react-redux";

import { actionOne } from "../actions/HelloActions";

export const Hello = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.HelloReducer);

  return (
    <div>
      <h1>Greeting : {greeting}</h1>

      <button onClick={() => dispatch(actionOne())}>Change Greeting</button>
    </div>
  );
};
