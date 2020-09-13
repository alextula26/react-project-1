import {addPostCreator, updateChangePostCreator} from "../../../redux/store";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  profile: state.profilePage,
});

const mapDispatchToProps = (dispatch) => ({
  setPost: () => dispatch(addPostCreator()),
  changePost: (name, age, message) => dispatch(updateChangePostCreator(name, age, message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
