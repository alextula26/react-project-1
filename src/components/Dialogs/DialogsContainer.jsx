import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {changeMessage, setMessage} from "../../redux/dialogsReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => ({
  dialogs: state.dialogs
});

const AuthRedirectComponent = withAuthRedirect(Dialogs);

export default connect(mapStateToProps, {setMessage, changeMessage})(AuthRedirectComponent);

