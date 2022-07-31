import mongoose from 'mongoose';

const subsubcatschema = mongoose.Schema({
  sub_category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'subcategories',
  },
  name: String,
});

const SubSubCategoryModel = mongoose.model('subsubcategories', subsubcatschema);

export default SubSubCategoryModel;
