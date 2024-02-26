
import './App.css'
import Cover from './Component/Cover'
import Navibar from './Component/Navibar'
import Row from './Component/Row'
import instance from './instance'
import requests from './request'

function App() {

  return (
    <>
     <Navibar/>
      <Cover fetchUrl={requests.fetchNetflixOriginals}/>
      
      <Row isposter='true' title='Trending movies' fetchUrl={requests.fetchTrending}/>
      <Row title ='Netflix orginals' fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Action' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
      
      
      
    </>
  )
}

export default App
