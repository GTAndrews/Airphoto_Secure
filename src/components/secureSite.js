import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const LoginModal = (props) => {

  const {className} = props;
  const [modal, setModal] = useState(false);
  const modaltoggle = () => setModal(!modal);

  return (
    <Modal isOpen={modal} modaltoggle={modaltoggle} className={className}>
        <ModalHeader toggle={modaltoggle}>Login to Download</ModalHeader>
        <ModalBody>
            You must Login with your Trent University credentials to download images that are currently under copyright. (Coming Soon)
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={modaltoggle} disabled>Login</Button>
            <Button color="secondary" onClick={modaltoggle}>Close</Button>
        </ModalFooter>
    </Modal>
  );
}

export default LoginModal;