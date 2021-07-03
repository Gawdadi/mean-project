class Pageable {
  constructor() {}
}

Pageable.prototype.pagination = (model) => {
  return async (req, res, next) => {
    const page = req.query.page > 0 ? Number(req.query.page) : 1;
    const size = req.query.size ? Number(req.query.size) : 50;
    const [sortBy, desc] = req.query.sortBy
      ? req.query.sortBy.slice(1, -1).split(",")
      : ["createdAt", "desc"];
    const skip = (page - 1) * size;
    const pagination = {
      size: size,
      page: page,
      total: await model.countDocuments().exec(),
    };
    try {
      res.pagination = pagination;
      res.content = await model
        .find()
        .sort({ [sortBy]: desc === "desc" ? -1 : 1 })
        .limit(size)
        .skip(skip)
        .exec();
      next();
    } catch (e) {
      res.status(500).json({
        message: e.message,
      });
    }
  };
};

module.exports = new Pageable();
