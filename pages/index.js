import { useState } from 'react';

const Index = () => {
	const [userInput, setUserInput] = useState('');
	const [todoList, setTodoList] = useState([]);

	const handleChange = (e) => {
		e.preventDefault();
		setUserInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (userInput.length !== 0) {
			setTodoList([userInput, ...todoList]);
			setUserInput('');
		}
	};

	const handleDelete = (todo) => {
		setTodoList([...todoList.filter((item) => item != todo)]);
	};

	return (
		<div className='container'>
			<h1 className='container__title'>
				Next JS ToDo List: {todoList.length ? todoList.length : 'no business'}
			</h1>
			<form className='container__form'>
				<input
					className='container__input'
					type='text'
					value={userInput}
					placeholder='Enter a todo item'
					onChange={handleChange}
				/>
				<button className='container__btn' onClick={handleSubmit}>
					Submit
				</button>
			</form>
			<ol className='container__list'>
				{todoList.length >= 1
					? todoList.map((todo, idx) => {
							return (
								<li key={idx}>
									{todo}
									<button
										onClick={(e) => {
											e.preventDefault();
											handleDelete(todo);
										}}
									>
										Delete
									</button>
								</li>
							);
					  })
					: 'Enter a todo item'}
			</ol>
		</div>
	);
};

export default Index;
