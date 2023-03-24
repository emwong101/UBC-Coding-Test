import React from "react";
import { Modal } from "@mui/material";
import "./Modal.scss";

function InfoModal({ open, handleClose }) {
  return (
    <div>
      <Modal open={open} onClose={handleClose}></Modal>
    </div>
  );
}

export default InfoModal;
