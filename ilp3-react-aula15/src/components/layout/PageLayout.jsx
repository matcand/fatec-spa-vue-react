export default function PageLayout({ title, children }) {
    return (
        <main className="page-layout">
            <h1>{title}</h1>
            {children}
        </main>
    )
}
