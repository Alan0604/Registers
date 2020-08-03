import React, { useState, useEffect } from 'react';
import ModalcadBroker from './components/Modal/ModalBroker/ModalCadBroker';
import InputCadBroker from './components/Input/Broker/InputCadBroker';
import InputFilterBroker from './components/Input/Broker/InputFilterBroker';
import api from './services/registerBroker.js';
// import Spinner from './components/Spinner/Spinner';
import Brokers from './components/Brokers/Brokers';
import CreateModal from './components/Modal/ModalBroker/CreateModal';

import apiInsurer from './services/registerInsurer';
import InputCadInsurer from './components/Input/Insurer/inputCadInsurer';
import InputFilterInsurer from './components/Input/Insurer/InputFilterInsurer';
import ModalcadInsurer from './components/Modal/ModalInsurer/ModalCadInsurer';
import CreateModalInsurer from './components/Modal/ModalInsurer/CreateModalInsurer';
import Insurer from './components/Insurer/Insurer';

export default function App() {
  const [allBroker, setAllBroker] = useState([]);
  const [filteredBroker, setFilteredBroker] = useState([]);
  const [selectedBroker, setSelectedBroker] = useState([]);
  const [currentName, setCurrentName] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);

  const [allInsurer, setAllInsurer] = useState([]);
  const [filteredInsurer, setFilteredInsurer] = useState([]);
  const [selectedInsurer, setSelectedInsurer] = useState([]);
  const [currentNameInsurer, setCurrentNameInsurer] = useState([]);
  const [isModalOpenInsurer, setIsModalOpenInsurer] = useState(false);
  const [isNewModalOpenInsurer, setIsNewModalOpenInsurer] = useState(false);

  const isOpen = isNewModalOpen || isModalOpen;

  const isOpenInsurer = isNewModalOpenInsurer || isModalOpenInsurer;

  useEffect(() => {
    api
      .findByNameBroker(currentName.name)
      .then((res) => {
        setAllBroker(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [currentName]);

  useEffect(() => {
    setFilteredBroker(allBroker);
  }, [allBroker]);

  useEffect(() => {
    apiInsurer
      .findByNameInsurer(currentNameInsurer.name)
      .then((res) => {
        setAllInsurer(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [currentNameInsurer]);

  useEffect(() => {
    setFilteredInsurer(allInsurer);
  }, [allInsurer]);

  const handleCreation = () => {
    setIsNewModalOpen(true);
  };

  const handleCreationInsurer = () => {
    setIsNewModalOpenInsurer(true);
  };

  const handleDelete = async (brokersOnDelete) => {
    await api.remove(brokersOnDelete._id);

    const deleteBrokers = allBroker.filter(
      ({ _id }) => _id !== brokersOnDelete._id
    );

    setAllBroker(deleteBrokers);
  };

  const handleDeleteInsurer = async (insurerOnDelete) => {
    await apiInsurer.remove(insurerOnDelete._id);

    const deleteInsurers = allInsurer.filter(
      ({ _id }) => _id !== insurerOnDelete._id
    );

    setAllInsurer(deleteInsurers);
  };

  const handlePersist = (broker) => {
    setSelectedBroker(broker);
    setIsModalOpen(true);
  };

  const handlePersistInsurer = (insurer) => {
    setSelectedInsurer(insurer);
    setIsModalOpenInsurer(true);
  };

  const handlePersistData = async (formData) => {
    const {
      _id,
      newName,
      newSusep,
      newBranch,
      newCnpj,
      newZip_code,
      newCity_name,
      newDistrict_name,
      newState_code,
      newStreet_name,
      newStreet_number,
      newStreet_complement,
      newEmail,
      newPhone,
      newMobile_phone,
    } = formData;

    const newBroker = Object.assign([], allBroker);
    const brokerToPersist = newBroker.find((broker) => broker._id === _id);

    brokerToPersist.name = newName;
    brokerToPersist.susep = newSusep;
    brokerToPersist.branch = newBranch;
    brokerToPersist.cnpj = newCnpj;
    brokerToPersist.zip_code = newZip_code;
    brokerToPersist.city_name = newCity_name;
    brokerToPersist.district_name = newDistrict_name;
    brokerToPersist.state_code = newState_code;
    brokerToPersist.street_name = newStreet_name;
    brokerToPersist.street_numbe = newStreet_number;
    brokerToPersist.street_complement = newStreet_complement;
    brokerToPersist.email = newEmail;
    brokerToPersist.phone = newPhone;
    brokerToPersist.mobile_phone = newMobile_phone;

    await api.update(_id, brokerToPersist);

    setIsModalOpen(false);
  };

  const handlePersistDataInsurer = async (formData) => {
    const {
      _id,
      newName,
      newCnpj,
      newZip_code,
      newCity_name,
      newDistrict_name,
      newState_code,
      newStreet_name,
      newStreet_number,
      newStreet_complement,
      newEmail,
      newPhone,
      newMobile_phone,
    } = formData;

    const newInsurer = Object.assign([], allInsurer);
    const insurerToPersist = newInsurer.find((insurer) => insurer._id === _id);

    insurerToPersist.name = newName;
    insurerToPersist.cnpj = newCnpj;
    insurerToPersist.zip_code = newZip_code;
    insurerToPersist.city_name = newCity_name;
    insurerToPersist.district_name = newDistrict_name;
    insurerToPersist.state_code = newState_code;
    insurerToPersist.street_name = newStreet_name;
    insurerToPersist.street_numbe = newStreet_number;
    insurerToPersist.street_complement = newStreet_complement;
    insurerToPersist.email = newEmail;
    insurerToPersist.phone = newPhone;
    insurerToPersist.mobile_phone = newMobile_phone;

    await apiInsurer.update(_id, insurerToPersist);

    setIsModalOpenInsurer(false);
  };

  const handleCreateData = async (formData) => {
    await api.create(formData);
    setCurrentName(formData.name);

    setIsNewModalOpen(false);
  };

  const handleCreateDataInsurer = async (formData) => {
    await apiInsurer.create(formData);
    setCurrentNameInsurer(formData.name);

    setIsNewModalOpenInsurer(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setIsNewModalOpen(false);
  };

  const handleCloseInsurer = () => {
    setIsModalOpen(false);
    setIsNewModalOpen(false);
  };

  const handleFilter = (currentFilter) => {
    const filterToLowerCase = currentFilter.toLowerCase();
    const newBroker = allBroker.filter(({ name }) => {
      const nameLowerCase = name.toLowerCase();

      return nameLowerCase.includes(filterToLowerCase);
    });

    setFilteredBroker(newBroker);
  };

  const handleFilterInsurer = (currentFilter) => {
    const filterToLowerCase = currentFilter.toLowerCase();
    const newInsurer = allInsurer.filter(({ name }) => {
      const nameLowerCase = name.toLowerCase();

      return nameLowerCase.includes(filterToLowerCase);
    });

    setFilteredInsurer(newInsurer);
  };

  return (
    <div className="container">
      <h4 className="center">REGISTROS</h4>
      <InputCadBroker isOpen={isOpen} onCreate={handleCreation} />

      {filteredBroker.length > 0 && (
        <Brokers
          onDelete={handleDelete}
          onPersist={handlePersist}
          brokers={filteredBroker}
        />
      )}

      {/* {filteredBroker.length === 0 && <Spinner />} */}

      {isModalOpen && (
        <ModalcadBroker
          onSave={handlePersistData}
          onClose={handleClose}
          selectedBroker={selectedBroker}
        />
      )}

      {isNewModalOpen && (
        <CreateModal onSave={handleCreateData} onClose={handleClose} />
      )}
      <InputFilterBroker onChangeFilter={handleFilter} />
      {/* ISURER */}
      <InputCadInsurer
        isOpen={isOpenInsurer}
        onCreate={handleCreationInsurer}
      />

      {filteredInsurer.length > 0 && (
        <Insurer
          onDeleteInsurer={handleDeleteInsurer}
          onPersistInsurer={handlePersistInsurer}
          insurers={filteredInsurer}
        />
      )}

      {isModalOpenInsurer && (
        <ModalcadInsurer
          onSave={handlePersistDataInsurer}
          onClose={handleCloseInsurer}
          selectedInsurer={selectedInsurer}
        />
      )}

      {isNewModalOpenInsurer && (
        <CreateModalInsurer
          onSave={handleCreateDataInsurer}
          onClose={handleCloseInsurer}
        />
      )}

      <InputFilterInsurer onChangeFilterInsurer={handleFilterInsurer} />
    </div>
  );
}
