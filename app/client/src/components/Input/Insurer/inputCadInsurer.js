import React, { useState, useEffect } from 'react';

export default function InputCadInsurer({ onCreate, isOpen }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonStyle = isModalOpen ? styles.buttonInvisible : styles.button;

  useEffect(() => {
    if (!isOpen) {
      setIsModalOpen(false);
    }
  }, [isOpen]);

  const handleModal = () => {
    onCreate(isModalOpen);
    setIsModalOpen(true);
  };

  return (
    <div style={styles.flexRow}>
      <input
        type="button"
        value="CADASTRO SEGURADORA"
        style={buttonStyle}
        className="waves-effect light-blue darken-3 btn"
        onClick={handleModal}
      />
    </div>
  );
}
const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 30,
  },

  button: {
    marginRight: 10,
    width: 270,
  },

  buttonInvisible: {
    opacity: 0,
  },
};
