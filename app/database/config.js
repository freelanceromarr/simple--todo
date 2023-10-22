import mongoose from "mongoose";

connect().catch(err=>console.log(err))
async function  connect() {
    await mongoose.connect(process.env.DB_HOST)
}

export default connect;