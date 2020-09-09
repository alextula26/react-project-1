import Dialogs from "./Dialogs";
import {addMessageCreator, updateChangeMessageCreator} from "../../redux/store";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  dialogs: state.dialogs,
});

const mapDispatchToProps = (dispatch) => ({
  setMessage: () => dispatch(addMessageCreator()),
  changeMessage: (message) => dispatch(updateChangeMessageCreator(message)),
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
