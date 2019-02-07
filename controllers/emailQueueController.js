const emailQueueModel = require('../models').emailQueue;

module.exports = {
    list(req, res) {
        return emailQueueModel
            .findAll()
            .then(emailQueues => res.status(200).send(emailQueues))
            .catch(error => res.status(400).send(error))
    },
    getById(req, res) {
        return emailQueueModel
            .findById(req.params.id)
            .then(emailQueue => {
                if (!emailQueue) return res.status(404).send({message: 'User Not Found'});

                return res.status(200).send(emailQueue);
            })
            .catch(error => res.status(400).send(error));
    },
    add(req, res) {
        return emailQueueModel
            .create({
                from: req.body.from,
                to: req.body.to,
                cc: req.body.cc,
                bcc: req.body.bcc,
                subject: req.body.subject,
                text: req.body.text,
                html: req.body.html,
                attachments: req.body.attachments,
                status: req.body.status,
            })
            .then(emailQueue => res.status(201).send(emailQueue))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return emailQueueModel
            .findById(req.params.id)
            .then(emailQueue => {
                if (!emailQueue) return res.status(404).send({message: 'Email queue not found'});

                return emailQueue
                    .update({
                        from: req.body.from,
                        to: req.body.to,
                        cc: req.body.cc,
                        bcc: req.body.bcc,
                        subject: req.body.subject,
                        text: req.body.text,
                        html: req.body.html,
                        attachments: req.body.attachments,
                        status: req.body.status,
                    })
                    .then(() => res.status(200).send(emailQueue))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return emailQueueModel
            .findById(req.params.id)
            .then(emailQueue => {
                if (!emailQueue) return res.status(404).send({message: 'Email queue not found'});

                return emailQueue
                    .destroy()
                    .then(() => res.status(204).send(emailQueue))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};