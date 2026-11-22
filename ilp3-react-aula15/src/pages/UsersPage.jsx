import { useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import UserForm from '../components/molecules/UserForm'
import UserList from '../components/organisms/UserList'
import Badge from '../components/atoms/Badge'
import Button from '../components/atoms/Button'

export default function UsersPage() {
    const [nome, setNome] = useState('')
    const [usuarios, setUsuarios] = useState([])

    function adicionar(e) {
        e.preventDefault()

        if (!nome.trim()) return

        setUsuarios([
            ...usuarios,
            { id: Date.now(), nome: nome.trim() }
        ])

        setNome('')
    }

    function remover(id) {
        setUsuarios(usuarios.filter(u => u.id !== id))
    }

    function limparTodos() {
        setUsuarios([])
    }

    return (
        <PageLayout title="Usuários — ILP3 Aula 15">
            <section className="summary-bar">
                <div className="summary-info">
                    <span>Total de usuários:</span>
                    <Badge>{usuarios.length}</Badge>
                </div>

                {usuarios.length > 0 && (
                    <Button onClick={limparTodos} variant="secondary">
                        Limpar lista
                    </Button>
                )}
            </section>

            <UserForm
                nome={nome}
                onNomeChange={e => setNome(e.target.value)}
                onSubmit={adicionar}
            />

            <UserList
                usuarios={usuarios}
                onRemover={remover}
            />
        </PageLayout>
    )
}