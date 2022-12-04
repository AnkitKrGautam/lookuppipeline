import mongoose from 'mongoose';

const subproductschema = mongoose.Schema({
  name: String,
  sub_sub_product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'subsubproduct',
  },
});

const subproductModel = mongoose.model('subproduct', subproductschema);

export default subproductModel;
