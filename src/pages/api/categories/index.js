// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import main, { Client } from "@/api/db"

export default async function handler(req, res) {
  
await main()
const categoriesCollection = Client.db("pc-compilers").collection('categories')
const limit = req.query?.limit
  const data = categoriesCollection.find()
 
  let result;
  if(limit){
    result = data.limit(+limit)
  }else{
    result = data
  }
  result = await result.toArray()
  res.status(200).json({ result })
}
