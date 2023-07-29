// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import main, { Client } from "@/api/db"

export default async function handler(req, res) {
  
await main()
const partsCollection = Client.db("pc-compilers").collection('parts')

const query = {
  ...(req.query.category? {category:req.query.category}:{})
} 
  const result = await partsCollection.aggregate([
    // Group documents by the "category" field
    {
      $group: {
        _id: "$category",
        products: { $push: "$$ROOT" }
      }
    },
    // Sample one product from each category
    {
      $project: {
        products: {$first:'$products'}
      }
    },
    // Unwind the "products" array to get individual documents
    {
      $unwind: "$products"
    },
     // Limit the output to 6 documents
    {
      $limit: 6
    } 
  ]).toArray()
  
  res.status(200).json({ result })
}
