import './App.css'
import Header from './components/Header'
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {

  return (
    <>
      <Header />
      <main className='flex justify-center min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-transparent'>
        <div className='flex flex-col w-[80%] sm:w-5/6 items-center gap-10'>
          <Intro />
          <Skills />
          <Projects />
        </div>
      </main>
    </>
  )
}

export default App;
