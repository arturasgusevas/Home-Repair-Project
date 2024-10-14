import {Schema, model, Document} from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isCorrectPassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.isCorrectPassword = function (
  password: string
): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

export default model<IUser>('User', userSchema);
