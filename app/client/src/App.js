import React, { useState, useEffect } from 'react';
import ModalcadBroker from './components/Modal/ModalCadBroker';
import InputCadBroker from './components/Input/InputCadBroker';
import InputFilterBroker from './components/Input/InputFilterBroker';
import api from './services/registerBroker.js';
import Spinner from './components/Spinner/Spinner';
import Brokers from './components/Brokers/Brokers';
import CreateModal from './components/Modal/CreateModal';

export default function App() {
  const [allBroker, setAllBroker] = useState([]);
  const [filteredBroker, setFilteredBroker] = useState([]);
  const [selectedBroker, setSelectedBroker] = useState([]);
  const [currentName, setCurrentName] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);

  const isOpen = isNewModalOpen || isModalOpen;

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

  const handleCreation = () => {
    setIsNewModalOpen(true);
  };

  const handleDelete = async (brokersOnDelete) => {
    await api.remove(brokersOnDelete._id);

    const deleteBrokers = allBroker.filter(
      ({ _id }) => _id !== brokersOnDelete._id
    );

    setAllBroker(deleteBrokers);
  };

  const handlePersist = (broker) => {
    setSelectedBroker(broker);
    setIsModalOpen(true);
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

  const handleCreateData = async (formData) => {
    await api.create(formData);
    setCurrentName(formData.name);

    setIsNewModalOpen(false);
  };

  const handleClose = () => {
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

      {filteredBroker.length === 0 && <Spinner />}

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
    </div>
  );
}
