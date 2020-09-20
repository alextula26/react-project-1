import {connect} from "react-redux";
import {changePost, setPost} from "../../../redux/profileReduser";
import Posts from "./Posts";

const mapStateToProps = (state) => ({
  profile: state.profilePage,
});

export default connect(mapStateToProps, {setPost, changePost})(Posts);
