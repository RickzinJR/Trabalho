let tarefas = []
let nextId = 1
exports.getAll = () => tarefas
exports.create = (data) => {
  const t = { id: nextId++, titulo: data.titulo || '', concluida: !!data.concluida }
  tarefas.push(t)
  return t
}
exports.update = (id, data) => {
  const i = tarefas.findIndex(t => t.id === id)
  if (i === -1) return null
  tarefas[i] = { id, titulo: data.titulo || tarefas[i].titulo, concluida: typeof data.concluida === 'boolean' ? data.concluida : tarefas[i].concluida }
  return tarefas[i]
}
exports.remove = (id) => {
  const i = tarefas.findIndex(t => t.id === id)
  if (i === -1) return false
  tarefas.splice(i, 1)
  return true
}
