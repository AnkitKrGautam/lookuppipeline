import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: String,
  sub_product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'subproduct',
  },
});

const productModel = mongoose.model('product', productSchema);

export default productModel;
