//clerkId, email,usernaem,photo,firstName,lastName,planId,creditBalance
import { Document, Schema, model, Types, models } from "mongoose";

export interface User extends Document {
  clerkId: string;
  email: string;
  username: string;
  photo: URL;
  firstName: string;
  lastName: string;
  planId: string;
  creditBalance: number;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  photo: { type: URL, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  planId: { type: Number, default: 1 },
  creditBalance: { type: Number, default: 10 },
});

const User = models?.User || model("User", UserSchema);
export default User;
