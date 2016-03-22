'use strict';

module.exports = (mongoose, models) => {
  let fileSchema = new mongoose.Schema({
    name: String,
    url: String,
    content: String
  });
  let File = mongoose.model('File', fileSchema);
  models.File = File;
};
