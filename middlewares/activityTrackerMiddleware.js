const _get = require('lodash').get;
const activityTrackerModel = require('../models').activityTracker;

module.exports = (req, res) => {
    // TODO: Parse sensitive data

    activityTrackerModel.create({
        userId: _get(req,'user.id', null),
        // companyId:,
        statusCode: res.statusCode,
        statusMessage: res.statusMessage,
        headers: JSON.stringify(req.headers),
        body: JSON.stringify(req.body),
        query: JSON.stringify(req.query),
        params: JSON.stringify(req.params),
        url: req.url,
        baseUrl: req.baseUrl,
        originalUrl: req.originalUrl,
    });
};