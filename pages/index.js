

//components
import Home from './Home';
import About from './About';
import Approach from './Approach';
import CaseStudies from './CaseStudies';
import Services from './Services';
//routes

const routes = [
  {path: '/', name : 'Home', Component: Home},
  {path: '/CaseStudies', name : 'Case Studies', Component: CaseStudies},
  {path: '/About', name : 'About', Component: About},
  {path: '/Approach', name : 'Approach', Component: Approach},
  {path: '/Services', name : 'Services', Component: Services}
]



function Index() {

  

  return (
      <Home/>
  );
}

export default Index;