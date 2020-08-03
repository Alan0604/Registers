import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

export default function InputCadBroker(onSave, onClose, selectedInsurer) {
  const {
    _id,
    name,
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
  } = selectedInsurer;

  const [isInsurerName, setInsurerName] = useState('name');
  const [isInsurerCnpj, setInsurerCnpj] = useState('cnpj');
  const [isInsurerZipCode, setInsurerZipCode] = useState('zip_code');
  const [isInsurerCityName, setInsurerCityName] = useState('city_name');
  const [isInsurerDistrictName, setInsurerDistrictName] = useState(
    'district_name'
  );
  const [isInsurerStateCode, setInsurerStateCode] = useState('state_code');
  const [isInsurerStreetName, setInsurerStreetName] = useState('street_name');
  const [isInsurerStreetNumber, setInsurerStreetNumber] = useState(
    'street_number'
  );
  const [isInsurerStreetComplement, setInsurerStreetComplement] = useState(
    'street_complement'
  );
  const [isInsurerEmail, setInsurerEmail] = useState('email');
  const [isInsurerPhone, setInsurerPhone] = useState('phone');
  const [isInsurerMobilePhone, setInsurerMobilePhone] = useState(
    'mobile_phone'
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onSave(null);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = {
      _id,
      newName: isInsurerName,
      newCnpj: isInsurerCnpj,
      newZipCode: isInsurerZipCode,
      newCityName: isInsurerCityName,
      newDistrictName: isInsurerDistrictName,
      newStateCode: isInsurerStateCode,
      newStreetName: isInsurerStreetName,
      newStreetNumber: isInsurerStreetNumber,
      newStreetComplement: isInsurerStreetComplement,
      newEmail: isInsurerEmail,
      newPhone: isInsurerPhone,
      newMobilePhone: isInsurerMobilePhone,
    };

    onSave(formData);
  };

  const handleNameChange = (event) => {
    setInsurerName(event.target.value);
  };

  const handleCnpjChange = (event) => {
    setInsurerCnpj(event.target.value);
  };

  const handleZipCodeChange = (event) => {
    setInsurerZipCode(event.target.value);
  };

  const handleCityNameChange = (event) => {
    setInsurerCityName(event.target.value);
  };

  const handleDistrictNameChange = (event) => {
    setInsurerDistrictName(event.target.value);
  };

  const handleStateCodeChange = (event) => {
    setInsurerStateCode(event.target.value);
  };

  const handleStreetNameChange = (event) => {
    setInsurerStreetName(event.target.value);
  };

  const handleStreetNumberChange = (event) => {
    setInsurerStreetNumber(event.target.value);
  };

  const handleStreetComplementChange = (event) => {
    setInsurerStreetComplement(event.target.value);
  };

  const handleEmailChange = (event) => {
    setInsurerEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setInsurerPhone(event.target.value);
  };

  const handleMobilePhoneChange = (event) => {
    setInsurerMobilePhone(event.target.value);
  };

  const handleModalCloseInsurer = () => {
    onClose(null);
  };

  return (
    <div>
      <Modal isOpen={true}>
        <div style={styles.flexRow}>
          <span style={styles.title}>Novo Cadastro Seguradora</span>
          <button
            className="waves-effect waves-light btn red darken-4"
            onClick={handleModalCloseInsurer}
          >
            x
          </button>
        </div>

        <form className="row" onSubmit={handleFormSubmit}>
          <div className="input-field col s12">
            <i class="material-icons prefix">store</i>
            <label>
              <b>DADOS DA SEGURADORA</b>
            </label>
            <br />
            <br />
          </div>
          <div className="input-field col s6">
            <input onChange={handleNameChange} id="inputName" type="text" />
            <label className="active" htmlFor="inputName">
              Nome da Seguradora:
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
              <b>ENDEREÇO DA SEGURADORA</b>
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
              <b>CONTADO DA SEGURADORA</b>
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
