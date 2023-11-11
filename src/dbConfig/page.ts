
import { MongoClient, ServerApiVersion } from 'mongodb';


const username = encodeURIComponent("mayanktamrkar2001");
const password = encodeURIComponent("Mt9009519870@");
// const uri = `mongodb+srv://${username}:${password}@cluster0.4uei7no.mongodb.net/?retryWrites=true&w=majority`
const uri = `mongodb+srv://${username}:${password}@cluster0.4xrzklp.mongodb.net/?retryWrites=true&w=majority`

// const uri =`mongodb+srv://${username}:${password}@cluster0.4uei7no.mongodb.net/?retryWrites=true&w=majority`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version


const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let clientPromise:any

try {
  const client = new MongoClient(uri, options)
   clientPromise = client.connect()
  
} catch (error) {
console.log('✌️error --->', error);
  
}




export default clientPromise

