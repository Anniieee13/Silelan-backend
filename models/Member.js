const mongoose = require("mongoose");

const paymentHistorySchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },

    paymentDate: {
      type: Date,
      default: Date.now,
    },

    paymentMethod: {
      type: String,
      default: "Cash",
    },
  },
  {
    _id: true,
  }
);


const memberSchema = new mongoose.Schema(
  {
    memberId: {
      type: String,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      default: "",
    },

    dob: {
      type: Date,
      default: null,
    },

    joiningDate: {
      type: Date,
      default: Date.now,
    },

    membership: {
      type: String,
      required: true,
    },

    expiryDate: {
      type: Date,
      default: null,
    },

    paymentStatus: {
      type: String,
      enum: [
        "PAID",
        "PAYMENT DUE",
        "EXPIRED",
      ],
      default: "PAYMENT DUE",
    },

    amountPaid: {
      type: Number,
      default: 0,
    },

    fingerprintId: {
      type: String,
      default: null,
    },

    paymentHistory: {
      type: [paymentHistorySchema],
      default: [],
    },
  },

  {
    timestamps: true,
  }
);


const Member = mongoose.model(
  "Member",
  memberSchema
);


module.exports = Member;