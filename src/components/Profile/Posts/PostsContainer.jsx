import {setPost, changePost} from "../../../redux/store";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  profile: state.profilePage,
});

export default connect(mapStateToProps, {setPost, changePost})(Posts);
