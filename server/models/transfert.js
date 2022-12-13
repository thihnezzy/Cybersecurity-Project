import mongoose from 'mongoose';

var TransfertSchema = new mongoose.Schema({

  src_name: {
	type: String,
	required: true,
	min: 0
  },
  dst_name: {
	type: String,
	required: true,
	min: 0
  },
  date: {
  	type: Date,
  	default: Date.now
  },
  pts_transfert: {
  	type: Number,
  	required: true,
	min: 0
  }
});

let TransfertModel = mongoose.model('transferts', TransfertSchema);

export default TransfertModel;