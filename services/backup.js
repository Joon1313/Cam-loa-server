const BackupRepository = require("../repositories/backup");

class BackupService {
  async findOne(id) {
    const result = await BackupRepository.findOne(id);
    return result;
  }

  async create(req) {
    const { todo, grave, grave2, grave3 } = req.body;
    const result = BackupRepository.create({
      todo,
      grave,
      grave2,
      grave3,
      ip: req.ip,
    });
    return result;
  }
}

module.exports = new BackupService();
