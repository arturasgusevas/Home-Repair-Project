import {Schema, model, Document} from 'mongoose';

interface ICategory extends Document {
  name: string;
  iconUrl: string;
  bgColor: string;
}

const categorySchema = new Schema<ICategory>({
  name: {type: String, required: true},
  iconUrl: {type: String, required: true},
  bgColor: {type: String, required: true}
});

export default model<ICategory>('Category', categorySchema);
