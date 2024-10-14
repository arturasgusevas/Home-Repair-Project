import {Schema, model, Document} from 'mongoose';

interface IBooking extends Document {
  businessId: string;
  date: string;
  time: string;
  email: string;
  name: string;
  status: string;
}

const bookingSchema = new Schema<IBooking>({
  businessId: {type: String, required: true},
  date: {type: String, required: true},
  time: {type: String, required: true},
  email: {type: String, required: true},
  name: {type: String, required: true},
  status: {type: String, required: true}
});

export default model<IBooking>('Booking', bookingSchema);
