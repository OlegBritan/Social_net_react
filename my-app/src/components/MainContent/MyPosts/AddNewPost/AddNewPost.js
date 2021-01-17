import React from 'react';
import classes from './AddNewPost.module.css'


const AddNewPost =() => {
	return(
		<article>
			<textarea placeholder='New post:'></textarea>
			<button>Send</button>
			<button>Clear</button>
		</article>
	)
}


export default AddNewPost