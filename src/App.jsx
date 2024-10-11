import Card from './components/Card.jsx';
import {testimonials} from './utils/data.jsx';

function App() {

  return (
    <>
      {testimonials.map((testimonial, idx) => <Card key={idx} {...testimonial} />)}
    </>
  )
}

export default App
