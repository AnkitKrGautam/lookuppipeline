import express from 'express';
import CategoryModel from '../models/category.js';

const router = express.Router();

router.get('/category', async (req, res) => {
  try {
    const data = await CategoryModel.aggregate([
      {
        $lookup: {
          from: 'subcategories',
          as: 'subcategories',
          let: { categoryId: '$_id' },
          pipeline: [
            {
              $match: {
                $expr: { $and: [{ $eq: ['$category_id', '$$categoryId'] }] },
              },
            },
            {
              $lookup: {
                from: 'subsubcategories',
                as: 'subcategories',
                let: { subcategoryId: '$_id' },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $and: [
                          { $eq: ['$sub_category_id', '$$subcategoryId'] },
                        ],
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ]);
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log('server error');
  }
});

export default router;
