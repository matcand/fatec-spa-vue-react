import Button from '../atoms/Button'

export default function UserList({ usuarios, onRemover }) {
    if (usuarios.length === 0) {
        return <p className="empty-message">Nenhum usuário cadastrado.</p>
    }

    return (
        <ul className="user-list">
            {usuarios.map(u => (
                <li key={u.id} className="user-item">
                    <span>{u.nome}</span>

                    <Button onClick={() => onRemover(u.id)} variant="danger">
                        Remover
                    </Button>
                </li>
            ))}
        </ul>
    )
}
