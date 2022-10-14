import React from 'react';
import { useSelector } from 'react-redux'

const Answer = () => {
	const answer = useSelector(state => state.answer)

	return (
		<section>
			<p>Jawabanmu adalah {answer.answer.join(", ")}</p>
		</section>
	)
}

export default Answer;