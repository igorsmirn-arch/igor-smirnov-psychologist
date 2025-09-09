cat > app/not-found.tsx << 'EOF'
export default function NotFound() {
  return (
    <div style={{ padding: 32 }}>
      <h1>Страница не найдена</h1>
      <p>Похоже, адрес неверный или страница была перемещена.</p>
    </div>
  );
}
EOF