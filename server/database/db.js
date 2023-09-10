import mongoose from "mongoose";


const Connection = ()=>{
    const DB_URL = `mongodb://user:gmailclone@ac-hos3cql-shard-00-00.ndbhblp.mongodb.net:27017,ac-hos3cql-shard-00-01.ndbhblp.mongodb.net:27017,ac-hos3cql-shard-00-02.ndbhblp.mongodb.net:27017/?ssl=true&replicaSet=atlas-tep7ll-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        mongoose.connect(DB_URL, { useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting the database', error.message);
    }
}

export default Connection;