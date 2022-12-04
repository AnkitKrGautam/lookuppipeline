import mongoose from 'mongoose';

const subsubproductschema = mongoose.Schema({
  name: String,
});

const subsubproductModel = mongoose.model('subsubproduct', subsubproductschema);

export default subsubproductModel;
