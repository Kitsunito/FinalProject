import express from "express";

const app = express();
const PORT = 8080;

app.listen(PORT, (error) => {
	if (error) console.log(`Error al inicializar el servidor: ${error}`);
	else console.log(`Servidor escuchando el puerto ${PORT}`);
});
