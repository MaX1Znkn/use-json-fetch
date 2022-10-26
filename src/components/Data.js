import React from "react";
import useJsonFetch from "../hooks/useHooks";

const Data = () => {
	const [{ data, loading, error }] = useJsonFetch(
		"http://localhost:7070/data",
		5000,
		[]
	);
	return (
		<div>
			<p>Статус: {data.status}</p>
			<p>Ошибка: {error ? " Да" : "Нет"}</p>
			<p>Загрузка: {loading ? "Да" : "Нет"}</p>
		</div>
	);
};

export default Data;
