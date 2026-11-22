import Input from '../atoms/Input'
import Button from '../atoms/Button'

export default function UserForm({ nome, onNomeChange, onSubmit }) {
    return (
        <form onSubmit={onSubmit} className="user-form">
            <Input
                value={nome}
                onChange={onNomeChange}
                placeholder="Nome do usuário"
            />

            <Button type="submit">
                Adicionar
            </Button>
        </form>
    )
}
