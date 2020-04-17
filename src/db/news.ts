import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Document = mongoose.Document;
mongoose.connect('mongodb+srv://user:mongoPassword@cluster0-dz0gn.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export interface INews extends Document {
  title: string;
  content: string;
  author: string;
  url: string;
}

const NewsSchema: any = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  url: { type: String, required: true }
});

// Export the model and return your IUser interface
export default mongoose.model<INews>('News', NewsSchema);