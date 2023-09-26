import React, { useState } from 'react';

const Etiqueta = ({ nombre, cantidad, seleccionada, onClick }) => (
	<div
		className={`etiqueta ${seleccionada ? 'seleccionada' : ''}`}
		onClick={() => onClick(nombre)}
	>
		{nombre} ({cantidad})
	</div>
);

const EtiquetasFiltro = ({ etiquetas, datos, onEtiquetaSeleccionada }) => {
	const [filtro, setFiltro] = useState('');

	const handleEtiquetaClick = (nombre) => {
		setFiltro(nombre);
		onEtiquetaSeleccionada(nombre);
	};

	const etiquetasFiltradas = etiquetas.filter((etiqueta) =>
		etiqueta.includes(filtro)
	);

	return (
		<div>
			<input
				type='text'
				placeholder='Filtrar etiquetas'
				value={filtro}
				onChange={(e) => setFiltro(e.target.value)}
			/>
			<div className='etiquetas-container'>
				{etiquetasFiltradas.map((nombre, index) => (
					<Etiqueta
						key={index}
						nombre={nombre}
						cantidad={datos[nombre]}
						seleccionada={nombre === filtro}
						onClick={handleEtiquetaClick}
					/>
				))}
			</div>
		</div>
	);
};

export default EtiquetasFiltro;
