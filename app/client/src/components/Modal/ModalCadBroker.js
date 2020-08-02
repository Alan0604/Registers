import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

export default function InputCadBroker(onSave, onClose, selectedBroker) {
  const {
    _id,
    name,
    susep,
    branch,
    cnpj,
    zip_code,
    city_name,
    district_name,
    state_code,
    street_name,
    street_number,
    street_complement,
    email,
    phone,
    mobile_phone,
  } = selectedBroker;

  const [isBrokerName, setBrokerName] = useState(name);
  const [isBrokerSusep, setBrokerSusep] = useState(susep);
  const [isBrokerBranch, setBrokerBranch] = useState(branch);
  const [isBrokerCnpj, setBrokerCnpj] = useState(cnpj);
  const [isBrokerZipCode, setBrokerZipCode] = useState(zip_code);
  const [isBrokerCityName, setBrokerCityName] = useState(city_name);
  const [isBrokerDistrictName, setBrokerDistrictName] = useState(district_name);
  const [isBrokerStateCode, setBrokerStateCode] = useState(state_code);
  const [isBrokerStreetName, setBrokerStreetName] = useState(street_name);
  const [isBrokerStreetNumber, setBrokerStreetNumber] = useState(street_number);
  const [isBrokerStreetComplement, setBrokerStreetComplement] = useState(
    street_complement
  );
  const [isBrokerEmail, setBrokerEmail] = useState(email);
  const [isBrokerPhone, setBrokerPhone] = useState(phone);
  const [isBrokerMobilePhone, setBrokerMobilePhone] = useState(mobile_phone);

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
      _id,
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
      <Modal isOpe={true}>
        <div style={styles.flexRow}>
          <span>Cadastro Corretora</span>
          <button
            className="waves-effect waves-light btn red darken-4"
            onClick={handleModalClose}
          >
            x
          </button>
        </div>
        <form className="row" onSubmit={handleFormSubmit}>
          <div className="input-field col s12">
            <input
              onChange={handleNameChange}
              id="inputName"
              type="text"
              value={name}
            />
            <label className="active" htmlFor="inputName">
              Nome da Corretora:
            </label>
          </div>
          <div className="input-field col s12">
            <input
              onChange={handleSusepChange}
              id="inputSusep"
              type="text"
              value={susep}
            />
            <label className="active" htmlFor="inputSusep">
              Susep da Corretora:
            </label>
          </div>
          <div className="input-field col s12">
            <input
              onChange={handleBranchChange}
              id="inputBranch"
              type="text"
              value={branch}
            />
            <label className="active" htmlFor="inputBranch">
              Branch da Corretora:
            </label>
          </div>
          <div className="input-field col s12">
            <input
              onChange={handleCnpjChange}
              id="inputCnpj"
              type="text"
              value={cnpj}
            />
            <label className="active" htmlFor="inputCnpj">
              CNPJ:
            </label>
          </div>
        </form>

        <form className="row" onSubmit={handleFormSubmit}>
          <div className="input-field col s12">
            <input
              onChange={handleZipCodeChange}
              id="inputZipCode"
              type="text"
              value={zip_code}
            />
            <label className="active" htmlFor="inputZipCode">
              CEP:
            </label>
          </div>
          <div className="input-field col s12">
            <input
              onChange={handleCityNameChange}
              id="inputCityName"
              type="text"
              value={city_name}
            />
            <label className="active" htmlFor="inputCityName">
              Cidade:
            </label>
          </div>
          <div className="input-field col s12">
            <input
              onChange={handleCityNameChange}
              id="inputCityName"
              type="text"
              value={city_name}
            />
            <label className="active" htmlFor="inputCityName">
              Cidade:
            </label>
          </div>
          <div className="input-field col s12">
            <input
              onChange={handleDistrictNameChange}
              id="inputDistrictName"
              type="text"
              value={district_name}
            />
            <label className="active" htmlFor="inputDistrictName">
              Bairro:
            </label>
          </div>
          <div className="input-field col s12">
            <input
              onChange={handleStateCodeChange}
              id="inputStateCode"
              type="text"
              value={state_code}
            />
            <label className="active" htmlFor="inputStateCode">
              UF:
            </label>
          </div>
          <div className="input-field col s12">
            <input
              onChange={handleStreetNameChange}
              id="inputStreetName"
              type="text"
              value={street_name}
            />
            <label className="active" htmlFor="inputStreetName">
              Rua:
            </label>
          </div>
          <div className="input-field col s12">
            <input
              onChange={handleStreetNumberChange}
              id="inputStreetNumber"
              type="text"
              value={street_number}
            />
            <label className="active" htmlFor="inputStreetNumber">
              Número:
            </label>
          </div>
          <div className="input-field col s12">
            <input
              onChange={handleStreetComplementChange}
              id="inputStreetComplement"
              type="text"
              value={street_complement}
            />
            <label className="active" htmlFor="inputStreetComplement">
              Complemento:
            </label>
          </div>
        </form>

        <form className="row" onSubmit={handleFormSubmit}>
          <div className="input-field col s12">
            <input
              onChange={handleEmailChange}
              id="inputEmail"
              type="text"
              value={email}
            />
            <label className="active" htmlFor="inputEmail">
              Email:
            </label>
          </div>
          <div className="input-field col s12">
            <input
              onChange={handlePhoneChange}
              id="inputPhone"
              type="text"
              value={phone}
            />
            <label className="active" htmlFor="inputPhone">
              Telefone:
            </label>
          </div>
          <div className="input-field col s12">
            <input
              onChange={handleMobilePhoneChange}
              id="inputMobilePhone"
              type="text"
              value={mobile_phone}
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
