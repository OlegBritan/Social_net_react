import React from 'react';
import classes from './AddNewPost.module.css'


const AddNewPost =() => {
	return(
		<article>
		
			<textarea placeholder='New post:'></textarea>
			<div>
			<button>Send</button>
			<button>Clear</button>
			</div>
		
			
		</article>
	)
}


export default AddNewPost