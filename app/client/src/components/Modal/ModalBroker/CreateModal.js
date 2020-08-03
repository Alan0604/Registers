import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function CreateModal({ onSave, onClose }) {
  const [isBrokerName, setBrokerName] = useState('');
  const [isBrokerSusep, setBrokerSusep] = useState('');
  const [isBrokerBranch, setBrokerBranch] = useState('');
  const [isBrokerCnpj, setBrokerCnpj] = useState('');
  const [isBrokerZipCode, setBrokerZipCode] = useState('');
  const [isBrokerCityName, setBrokerCityName] = useState('');
  const [isBrokerDistrictName, setBrokerDistrictName] = useState('');
  const [isBrokerStateCode, setBrokerStateCode] = useState('');
  const [isBrokerStreetName, setBrokerStreetName] = useState('');
  const [isBrokerStreetNumber, setBrokerStreetNumber] = useState('');
  const [isBrokerStreetComplement, setBrokerStreetComplement] = useState('');
  const [isBrokerEmail, setBrokerEmail] = useState('');
  const [isBrokerPhone, setBrokerPhone] = useState('');
  const [isBrokerMobilePhone, setBrokerMobilePhone] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose(null);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = {
      newName: isBrokerName,
      newSusep: isBrokerSusep,
      newBranch: isBrokerBranch,
      newCnpj: isBrokerCnpj,
      newZipCode: isBrokerZipCode,
      newCityName: isBrokerCityName,
      newDistrictName: isBrokerDistrictName,
      newStateCode: isBrokerStateCode,
      newStreetName: isBrokerStreetName,
      newStreetNumber: isBrokerStreetNumber,
      newStreetComplement: isBrokerStreetComplement,
      newEmail: isBrokerEmail,
      newPhone: isBrokerPhone,
      newMobilePhone: isBrokerMobilePhone,
    };

    onSave(formData);
  };

  const handleNameChange = (event) => {
    setBrokerName(event.target.value);
  };

  const handleSusepChange = (event) => {
    setBrokerSusep(event.target.value);
  };

  const handleBranchChange = (event) => {
    setBrokerBranch(event.target.value);
  };

  const handleCnpjChange = (event) => {
    setBrokerCnpj(event.target.value);
  };

  const handleZipCodeChange = (event) => {
    setBrokerZipCode(event.target.value);
  };

  const handleCityNameChange = (event) => {
    setBrokerCityName(event.target.value);
  };

  const handleDistrictNameChange = (event) => {
    setBrokerDistrictName(event.target.value);
  };

  const handleStateCodeChange = (event) => {
    setBrokerStateCode(event.target.value);
  };

  const handleStreetNameChange = (event) => {
    setBrokerStreetName(event.target.value);
  };

  const handleStreetNumberChange = (event) => {
    setBrokerStreetNumber(event.target.value);
  };

  const handleStreetComplementChange = (event) => {
    setBrokerStreetComplement(event.target.value);
  };

  const handleEmailChange = (event) => {
    setBrokerEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setBrokerPhone(event.target.value);
  };

  const handleMobilePhoneChange = (event) => {
    setBrokerMobilePhone(event.target.value);
  };

  const handleModalClose = () => {
    onClose(null);
  };

  return (
    <div>
      <Modal isOpen={true}>
        <div style={styles.flexRow}>
          <span style={styles.title}>Novo Cadastro Corretora</span>
          <button
            className="waves-effect waves-light btn red darken-4"
            onClick={handleModalClose}
          >
            x
          </button>
        </div>

        <form className="row" onSubmit={handleFormSubmit}>
          <div className="input-field col s12">
            <i class="material-icons prefix">store</i>
            <label>
              <b>DADOS DA CORRETORA</b>
            </label>
            <br />
            <br />
          </div>
          <div className="input-field col s6">
            <input onChange={handleNameChange} id="inputName" type="text" />
            <label className="active" htmlFor="inputName">
              Nome da Corretora:
            </label>
          </div>
          <div className="input-field col s2">
            <input onChange={handleSusepChange} id="inputSusep" type="text" />
            <label className="active" htmlFor="inputSusep">
              Susep da Corretora:
            </label>
          </div>
          <div className="input-field col s2">
            <input onChange={handleBranchChange} id="inputBranch" type="text" />
            <label className="active" htmlFor="inputBranch">
              Branch da Corretora:
            </label>
          </div>
          <div className="input-field col s2">
            <input onChange={handleCnpjChange} id="inputCnpj" type="text" />
            <label className="active" htmlFor="inputCnpj">
              CNPJ:
            </label>
          </div>
        </form>

        <form className="row" onSubmit={handleFormSubmit}>
          <div className="input-field col s12">
            <i class="material-icons prefix">place</i>
            <label>
              <b>ENDEREÇO DA CORRETORA</b>
            </label>
            <br />
            <br />
          </div>
          <div className="input-field col s2">
            <input
              onChange={handleZipCodeChange}
              id="inputZipCode"
              type="text"
            />
            <label className="active" htmlFor="inputZipCode">
              CEP:
            </label>
          </div>
          <div className="input-field col s4">
            <input
              onChange={handleCityNameChange}
              id="inputCityName"
              type="text"
            />
            <label className="active" htmlFor="inputCityName">
              Cidade:
            </label>
          </div>
          <div className="input-field col s4">
            <input
              onChange={handleDistrictNameChange}
              id="inputDistrictName"
              type="text"
            />
            <label className="active" htmlFor="inputDistrictName">
              Bairro:
            </label>
          </div>
          <div className="input-field col s2">
            <input
              onChange={handleStateCodeChange}
              id="inputStateCode"
              type="text"
            />
            <label className="active" htmlFor="inputStateCode">
              UF:
            </label>
          </div>
          <div className="input-field col s4">
            <input
              onChange={handleStreetNameChange}
              id="inputStreetName"
              type="text"
            />
            <label className="active" htmlFor="inputStreetName">
              Rua:
            </label>
          </div>
          <div className="input-field col s4">
            <input
              onChange={handleStreetNumberChange}
              id="inputStreetNumber"
              type="text"
            />
            <label className="active" htmlFor="inputStreetNumber">
              Número:
            </label>
          </div>
          <div className="input-field col s4">
            <input
              onChange={handleStreetComplementChange}
              id="inputStreetComplement"
              type="text"
            />
            <label className="active" htmlFor="inputStreetComplement">
              Complemento:
            </label>
          </div>
        </form>

        <form className="row" onSubmit={handleFormSubmit}>
          <div className="input-field col s12">
            <i class="material-icons prefix">contacts</i>
            <label>
              <b>CONTADO DA CORRETORA</b>
            </label>
            <br />
            <br />
          </div>
          <div className="input-field col s4">
            <i class="material-icons prefix">email</i>
            <input onChange={handleEmailChange} id="inputEmail" type="text" />
            <label className="active" htmlFor="inputEmail">
              Email:
            </label>
          </div>
          <div className="input-field col s4">
            <i class="material-icons prefix">phone</i>
            <input onChange={handlePhoneChange} id="inputPhone" type="text" />
            <label className="active" for="icon_telephone" htmlFor="inputPhone">
              Telefone:
            </label>
          </div>
          <div className="input-field col s4">
            <i class="material-icons prefix">phone_iphone</i>
            <input
              onChange={handleMobilePhoneChange}
              id="inputMobilePhone"
              type="text"
            />
            <label className="active" htmlFor="inputMobilePhone">
              Celular:
            </label>
          </div>
          <div className="input-field col s12" style={styles.flexRow}>
            <button className="waves-effect light-blue darken-3 btn">
              Salvar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '40px',
  },

  title: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },
};
