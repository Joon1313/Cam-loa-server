const Backup = require("../models/backup");

class BackupService {
  async findOne(id) {
    console.log(id);
    const result = await Backup.findOne({ _id: id });
    return result;
  }

  async create(req) {
    const { todo, grave, grave2, grave3 } = req.body;
    const backup = new Backup({
      todo,
      grave,
      grave2,
      grave3,
      ip: req.ip,
    });
    const result = await backup.save();
    return result;
  }
}

module.exports = new BackupService();
