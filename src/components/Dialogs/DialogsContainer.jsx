import Dialogs from "./Dialogs";
import {setMessage, changeMessage} from "../../redux/store";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  dialogs: state.dialogs,
});

export default connect(mapStateToProps, {setMessage, changeMessage})(Dialogs);
