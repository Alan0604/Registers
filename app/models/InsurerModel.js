import mongoose from 'mongoose';

let schema = mongoose.Schema({
  name: String,
  cnpj: String,
  zip_code: String,
  city_name: String,
  district_name: String,
  state_code: String,
  street_name: String,
  street_number: String,
  street_complement: String,
  email: String,
  phone: String,
  mobile_phone: String,
});

const InsurerModel = mongoose.model('insurer', schema, 'insurer'); //Terceiro parâmetro manter no singular

module.exports = InsurerModel;
