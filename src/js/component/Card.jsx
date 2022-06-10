import React, { useState, useEffect } from "react";
import List from "./List.jsx";

const Card = () => {
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);
	let defaultInfo = "";

	useEffect(() => {
		lista.length === 0
			? (defaultInfo = "No hay tareas, añadir tareas")
			: (defaultInfo = "Default input");
		console.log(defaultInfo);
	}, [lista]);

	function listAdd(e) {
		e.preventDefault();
		if (tarea === "") {
			alert("El campo no puede estar vacío");
		} else {
			setLista(lista.concat(tarea));
			setTarea("");
		}
	}
	/*function defaultInfo() {
        return lista.length === 0?"No hay tareas, añadir tareas":"Default input";
	}*/

	return (
		<>
			<form onSubmit={listAdd}>
				<input
					className="form-control m-auto p-3 w-50"
					onChange={(e) => setTarea(e.target.value)}
					type="text"
					value={tarea}
					placeholder={defaultInfo}
					aria-label="default input example"></input>
			</form>
			<List lista={lista} setLista={setLista} />
		</>
	);
};

export default Card;
