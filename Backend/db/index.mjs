import mongoose from 'mongoose';

const url = `mongodb+srv://alishbasarfraz2006:NOoeYEOvZ2XD8CxC@hackathoncluster.9jganmi.mongodb.net/?retryWrites=true&w=majority&appName=HackathonCluster`

mongoose.connect(url)
export default mongoose;

