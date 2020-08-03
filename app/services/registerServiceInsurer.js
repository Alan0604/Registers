const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

import InsurerModel from '../models/InsurerModel';

const create = async (req, res) => {
  const name = req.body.name;
  const cnpj = req.body.cnpj;
  const zip_code = req.body.zip_code;
  const city_name = req.body.city_name;
  const district_name = req.body.district_name;
  const state_code = req.body.state_code;
  const street_name = req.body.street_name;
  const street_number = req.body.street_number;
  const street_complement = req.body.street_complement;
  const email = req.body.email;
  const phone = req.body.phone;
  const mobile_phone = req.body.mobile_phone;

  try {
    const newInsurer = new InsurerModel({
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
    });

    newInsurer.save();

    res.send(newInsurer);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Erro ao salvar' });
  }
};

const findAllInsurer = async (_, res) => {
  try {
    const allInsurer = await InsurerModel.find({}, { _id: 0 });

    allInsurer.sort((a, b) => a.name - b.name);

    res.send(allInsurer);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar Seguradora' });
  }
};

const findByNameInsurer = async (req, res) => {
  const name = req.body.name;

  try {
    const nameInsurer = await InsurerModel.find({
      name: name,
    });

    if (nameInsurer.length < 1) {
      res.status(400).send({
        message: `Nome ${name} não encontrado`,
      });
    }

    nameInsurer.sort((a, b) => a.name - b.name);

    res.send(nameInsurer);
  } catch (error) {
    res.status.send({ message: 'Erro ao procurar o nome: ' + name });
  }
};

const update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Dados para atualização vazio',
    });
  }

  const id = req.params.id;

  const name = req.body.name;
  const cnpj = req.body.cnpj;
  const zip_code = req.body.zip_code;
  const city_name = req.body.city_name;
  const district_name = req.body.district_name;
  const state_code = req.body.state_code;
  const street_name = req.body.street_name;
  const street_number = req.body.street_number;
  const street_complement = req.body.street_complement;
  const email = req.body.email;
  const phone = req.body.phone;
  const mobile_phone = req.body.mobile_phone;

  try {
    await InsurerModel.findByIdAndUpdate(id, {
      name: name,
      cnpj: cnpj,
      zip_code: zip_code,
      city_name: city_name,
      district_name: district_name,
      state_code: state_code,
      street_name: street_name,
      street_number: street_number,
      street_complement: street_complement,
      email: email,
      phone: phone,
      mobile_phone: mobile_phone,
    });
    res.send({ message: 'Atualização realizada com sucesso' });
  } catch (error) {
    res.status(500).send({ message: 'Erro ao atualizar registro.' });
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    await InsurerModel.findByIdAndRemove(id);
    res.send({ message: 'Seguradora excluida com sucesso' });
  } catch (error) {
    res.status(500).send({ message: 'Não foi possível deletar a Seguradora.' });
  }
};

export { create, findAllInsurer, findByNameInsurer, update, remove };
