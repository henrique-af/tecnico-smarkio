module.exports = (sequelize, Sequelize) => {
    const Comments = sequelize.define("Comments", {
      comments: {
        type: Sequelize.STRING
      }
    });
    return Comments;
  };