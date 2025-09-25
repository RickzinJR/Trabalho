const model = require('../models/tarefasModel')
exports.list = (req, res) => { res.json(model.getAll()) }
exports.create = (req, res) => { const tarefa = model.create(req.body); res.status(201).json(tarefa) }
exports.update = (req, res) => { const id = parseInt(req.params.id); const updated = model.update(id, req.body); if (!updated) return res.status(404).send(); res.json(updated) }
exports.remove = (req, res) => { const id = parseInt(req.params.id); const removed = model.remove(id); if (!removed) return res.status(404).send(); res.status(204).send() }
