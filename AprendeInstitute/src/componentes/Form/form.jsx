import React from 'react';
import Formulario from './Formulario';
const Form = () => {
	return (
		<div className='Form_container'>
			<div className='Form_background'>
				<img
					className='Form_imgfondo'
					src='imgfondo.png'
					alt='Aprende Institute'
				/>

				<div className='Form_containertext'>
					<h3 className='Form_diplomado'>Diplomado en</h3>
					<h3 className='Form_reposteria'>Repostería Profesional</h3>
					<p className='Form_text'>
						Aprende todo sobre este maravilloso mundo, desde el uso adecuado de
						harinas, hasta la preparación de cremas y natillas.
					</p>
				</div>
				<div className='Formulario_cont'>
					<Formulario />
				</div>
			</div>
		</div>
	);
};

export default Form;
