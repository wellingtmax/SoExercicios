const app = require('./src/app');

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`✅ Serviço rodando na porta---- http://localhost:${PORT} ----`);
});