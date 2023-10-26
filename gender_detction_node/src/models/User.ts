import mongoose, { Schema, Document, Model } from "mongoose";

interface UserDoc extends Document {
  age: string;
  gender: string;
}

const UserSchema = new Schema(
  {
    age: { type: String },
    gender: { type: String },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.salt;
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
      },
    },
    timestamps: true,
  }
);

const User = mongoose.model<UserDoc>("user", UserSchema);

export { User };
