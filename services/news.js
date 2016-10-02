const db = require(__base + 'models');
const config = require(__base + 'config');

class News {
  constructor(id, {title, text, date}) {
    this.id = id ? id : undefined;
    this.title = title;
    this.text = text ? text : undefined;
    this.date = date ? date : undefined;
  }

  upsert() {
    if (this.id) {
      return db.News.findById(this.id)
      .then(news => {
        if (this.title) {
          news.title = this.title;
        }
        if (this.text) {
          news.text = this.text;
        }
        if (this.date) {
          news.date = this.date;
        }

        return news.save()
        .then(news => this);
      });
    } else {
      return db.News.create(this)
      .then(news => this);
    }
  }
}

function getNews(filter, limit, offset, sort) {
  return db.News.findAndCountAll({
    where: filter ? filter : undefined,
    limit: limit ? limit : (config.DEFAULT_LIST_LIMIT || 20),
    offset: offset ? offset : undefined,
    order: sort ? sort : ['date', 'DESC'],
  })
  .then(({rows, count}) => {
    return {
      news: rows.map(news => new News(news.id, news)),
      total: count,
    };
  });
}

module.exports = {
  News: News,
  getNews: getNews,
};
