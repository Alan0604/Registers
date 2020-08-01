import mongoose from 'mongoose';

import BrokerModel from '../models/registerBroker';
import { Logger } from 'mongodb';

const create = async (req, res) => {
  const name = req.body.name;
  const susep = req.body.susep;
  const branch = req.body.branch;
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
    const newBroker = new BrokerModel({
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
    });

    newBroker.save();
  } catch (error) {
    res.status(500).send({ message: error.message || 'Erro ao salvar' });
  }
};

const findByNameBroker = async (req, res) => {
  const name = req.body.name;

  try {
    const nameBroker = await BrokerModel.find({
      name: name,
    });

    if (nameBroker.length < 1) {
      res.status(400).send({
        message: `Nome ${name} não encontrado`,
      });
    }

    nameBroker.sort((a, b) => a.name - b.name);

    res.send(nameBroker);
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
  const susep = req.body.susep;
  const branch = req.body.branch;
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
    await BrokerModel.findByIdAndUpdate(id, {
      name: name,
      susep: susep,
      branch: branch,
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
    await BrokerModel.findByIdAndRemove(id);
    res.send({ message: 'Contadora excluida com sucesso' });
  } catch (error) {
    res.status(500).send({ message: 'Não foi possível deletar a Contadora.' });
  }
};

exports.create = create;
exports.findByNameBroker = findByNameBroker;
exports.update = update;
exports.remove = remove;
