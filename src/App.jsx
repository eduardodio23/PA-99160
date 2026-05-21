import { useEffect, useState } from 'react'

const entities = {
  Clientes: {
    title: 'Clientes',
    fields: [
      { key: 'nome', label: 'Nome', type: 'text', placeholder: 'Nome completo' },
      { key: 'cpf', label: 'CPF', type: 'text', placeholder: '000.000.000-00' },
      { key: 'email', label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
      { key: 'telefone', label: 'Telefone', type: 'tel', placeholder: '(00) 00000-0000' },
    ],
    columns: ['nome', 'cpf', 'email', 'telefone'],
  },
  Funcionarios: {
    title: 'Funcionários',
    fields: [
      { key: 'nome', label: 'Nome', type: 'text', placeholder: 'Nome completo' },
      { key: 'telefone', label: 'Telefone', type: 'tel', placeholder: '(00) 00000-0000' },
      { key: 'email', label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
      { key: 'cargo', label: 'Cargo', type: 'text', placeholder: 'Ex: Vendedor' },
      { key: 'setor', label: 'Setor', type: 'text', placeholder: 'Ex: Vendas' },
    ],
    columns: ['nome', 'telefone', 'email', 'cargo', 'setor'],
  },
  Produtos: {
    title: 'Produtos',
    fields: [
      { key: 'nome', label: 'Nome', type: 'text', placeholder: 'Nome do produto' },
      { key: 'lote', label: 'Lote', type: 'text', placeholder: 'Lote' },
      { key: 'quantidade', label: 'Quantidade', type: 'number', placeholder: '0' },
      { key: 'preco', label: 'Preço', type: 'number', placeholder: '0' },
    ],
    columns: ['nome', 'lote', 'quantidade', 'preco'],
  },
}

const getEmptyForm = (entityKey) => {
  const fields = entities[entityKey].fields
  return fields.reduce((acc, field) => ({ ...acc, [field.key]: '' }), {})
}

export default function App() {
  const [activeEntity, setActiveEntity] = useState('Clientes')
  const [items, setItems] = useState([])
  const [formData, setFormData] = useState(getEmptyForm('Clientes'))
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const current = entities[activeEntity]

  useEffect(() => {
    setFormData(getEmptyForm(activeEntity))
    loadItems(activeEntity)
  }, [activeEntity])

  const loadItems = async (entityKey) => {
    setLoading(true)
    setStatus(null)

    try {
      const response = await fetch(`/api/${entityKey}`)
      if (!response.ok) {
        throw new Error('Não foi possível carregar os dados.')
      }

      const data = await response.json()
      setItems(data)
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
      setItems([])
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (key, value) => {
    setFormData((currentForm) => ({ ...currentForm, [key]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const payload = { ...formData }
      if (activeEntity === 'Produtos') {
        payload.preco = Number(payload.preco)
      }

      const response = await fetch(`/api/${activeEntity}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.mensagem || 'Erro ao salvar o registro.')
      }

      setStatus({ type: 'success', message: data.mensagem })
      setFormData(getEmptyForm(activeEntity))
      loadItems(activeEntity)
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <header>
        <h1>Gestão de Cadastro</h1>
        <p>Adicione clientes, funcionários e produtos com leitura em tempo real do banco.</p>
      </header>

      <nav className="tabs">
        {Object.keys(entities).map((key) => (
          <button
            key={key}
            type="button"
            className={key === activeEntity ? 'active' : ''}
            onClick={() => setActiveEntity(key)}
          >
            {entities[key].title}
          </button>
        ))}
      </nav>

      <section className="panel">
        <div className="panel-grid">
          <div className="card">
            <strong>{current.title}</strong>
            <p>Preencha o formulário abaixo para cadastrar um novo registro.</p>

            <form onSubmit={handleSubmit}>
              {current.fields.map((field) => (
                <label key={field.key}>
                  <span>{field.label}</span>
                  <input
                    type={field.type}
                    value={formData[field.key]}
                    placeholder={field.placeholder}
                    onChange={(event) => handleChange(field.key, event.target.value)}
                    required={field.key !== 'lote'}
                  />
                </label>
              ))}

              <button type="submit" disabled={loading}>
                {loading ? 'Salvando...' : `Salvar ${current.title}`}
              </button>
            </form>

            {status && (
              <div className={`status ${status.type}`}>
                {status.message}
              </div>
            )}
          </div>

          <div className="card card-table">
            <strong>Registros existentes</strong>
            {loading ? (
              <p>Carregando dados...</p>
            ) : items.length === 0 ? (
              <p>Nenhum registro encontrado.</p>
            ) : (
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      {current.columns.map((column) => (
                        <th key={column}>{column}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={index}>
                        {current.columns.map((column) => (
                          <td key={column}>{item[column] ?? '-'}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
