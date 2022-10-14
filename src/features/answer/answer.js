import React from 'react';
import { useSelector } from 'react-redux'

const Answer = () => {
	const answer = useSelector(state => state.answer)

	return (
		<section>
			<p>Jawabanmu adalah {answer}</p>
		</section>
	)
}

export default Answer;