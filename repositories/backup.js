const Backup = require("../models/backup");

class BackupRepository {
  async findOne(id) {
    const result = await Backup.findOne({ _id: id });
    return result;
  }

  async create({ ...backupData }) {
    const backup = new Backup({
      ...backupData,
    });
    const result = await backup.save();
    return result;
  }
}

module.exports = new BackupRepository();
