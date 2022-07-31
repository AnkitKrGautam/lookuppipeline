import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
  name: String,
});

const CategoryModel = mongoose.model('categories', categorySchema);

export default CategoryModel;
