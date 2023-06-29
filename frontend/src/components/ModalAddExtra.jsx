import { useContext } from "react";
import PropTypes from "prop-types";

import ModalAddExtraOs from "./ModalAddExtraOs";
import ModalAddExtraBrand from "./ModalAddExtraBrand";
import ModalAddExtraRam from "./ModalAddExtraRam";
import ModalAddExtraStorage from "./ModalAddExtraStorage";

import CurrentModalContext from "../contexts/ModalContext";

export default function ModalAddExtra({
  setModalOs,
  setModalBrand,
  setModalRam,
  setModalStorage,
}) {
  const { modal } = useContext(CurrentModalContext);
  const isOpenModal = Object.keys(modal).length;
  let template;
  switch (modal.extra) {
    case "os":
      template = <ModalAddExtraOs setModalOs={setModalOs} />;
      break;
    case "brand":
      template = <ModalAddExtraBrand setModalBrand={setModalBrand} />;
      break;
    case "ram":
      template = <ModalAddExtraRam setModalRam={setModalRam} />;
      break;
    case "storage":
      template = <ModalAddExtraStorage setModalStorage={setModalStorage} />;
      break;
    default:
      template = null;
      break;
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{isOpenModal ? <div className="modal">{template}</div> : null}</>
  );
}

ModalAddExtra.propTypes = {
  setModalOs: PropTypes.func.isRequired,
  setModalBrand: PropTypes.func.isRequired,
  setModalRam: PropTypes.func.isRequired,
  setModalStorage: PropTypes.func.isRequired,
};
