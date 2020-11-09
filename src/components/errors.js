import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ErrorModal = (props) => {

  const {className} = props;
  const [modal, setModal] = useState(false);
  const modaltoggle = () => setModal(!modal);

  return (
    <Modal isOpen={modal} modaltoggle={modaltoggle} className={className}>
        <ModalHeader toggle={modaltoggle}>Photo View not yet available</ModalHeader>
        <ModalBody>
            This photo view is currently not available, check back soon for more details.
        </ModalBody>
        <ModalFooter>
            <Button color="secondary" onClick={modaltoggle}>Close</Button>
        </ModalFooter>
    </Modal>
  );
}

export default ErrorModal;