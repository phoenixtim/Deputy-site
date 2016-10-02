const services = require(__base + 'services');

const schemaTypes = `
  type News {
    id: Int!
    title: String!
    text: String
    date: Int!
  }

  input NewsInput {
    title: String!
    text: String
    date: Int
  }
`;

const schemaQueries = `
  news(ids: [Int!], limit: Int, after: String): [News]
`;

const schemaMutations = `
  upsertNews(id: Int, input: NewsInput!): News
`;

const answer = {
  news: ({ids, limit, after}) => {
    var filter = {};
    if (ids && ids.length) {
      filter.id = {$in: ids};
    }
    if (after) {
      filter.date = {$gt: after};
    }

    return services.news.getNews(filter, limit);
  },
  upsertNews: ({id, NewsInput}) => {
    var news = new services.news.News(id, NewsInput);
    return news.upsert();
  },
};

module.exports = {
  schema: {
    types: schemaTypes,
    queries: schemaQueries,
    mutations: schemaMutations,
  },
  answer: answer,
};
