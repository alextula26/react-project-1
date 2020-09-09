import {addPostCreator, updateChangePostCreator} from "../../../redux/store";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPost: () => dispatch(addPostCreator()),
    changePost: (name, age, message) => dispatch(updateChangePostCreator(name, age, message)),
  }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
