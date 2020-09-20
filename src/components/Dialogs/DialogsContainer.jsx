import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {changeMessage, setMessage} from "../../redux/dialogsReducer";

const mapStateToProps = (state) => ({
  dialogs: state.dialogs,
});

export default connect(mapStateToProps, {setMessage, changeMessage})(Dialogs);
