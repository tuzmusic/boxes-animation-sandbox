import { connect } from "react-redux";
import { clickBoxAtIndex } from "./boxesSlice";
import Box from "./Box";

const selectProps = ({ currIndex }, { index }) => {
  let position = "";
  if (index < currIndex) position = "left";
  if (index > currIndex) position = "right";
  if (index === currIndex) position = "center";
  return { position };
};

const actions = (dispatch, ownProps) => ({
  clickBoxAtIndex() {
    dispatch(clickBoxAtIndex(ownProps.index));
  }
});

export default connect(
  selectProps,
  actions
)(Box);
// export default connect(selectProps, actions)(Box)
