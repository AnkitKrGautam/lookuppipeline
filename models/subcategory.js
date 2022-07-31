import mongoose from 'mongoose';

const subcatschema = mongoose.Schema({
  name: String,
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categories',
  },
});

const SubCategoryModel = mongoose.model('subcategories', subcatschema);

export default SubCategoryModel;
