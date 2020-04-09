import { connect } from "react-redux";
import { next, prev } from "./boxesSlice";
import Button from "./Button";

const actions = dispatch => ({
  next: () => dispatch(next()),
  prev: () => dispatch(prev())
});

export default connect(
  null,
  actions
)(Button);
