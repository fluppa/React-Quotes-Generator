import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Quote from './components/Quote'
import Button from './components/Button'

var indexes = []
var jsonArr
const getQuotesFromApi = () => {
  return fetch(
    'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json'
  )
    .then((response) => response.json())
    .then((responseJson) => {
      jsonArr = responseJson
    })
    .catch((error) => {
      console.error(error)
    })
}

const App = () => {
  const [quote, setQuote] = useState('Click button to generate quote!')
  const [bgColor, setColor] = useState('#b8aeae')
  const [prevBtnActive, setPrevActive] = useState(false)
  getQuotesFromApi()

  const changeQuote = () => {
    let newIndex
    let max = jsonArr.length
    while (true) {
      newIndex = Math.floor(Math.random() * max)
      if (indexes.length >= max || !indexes.includes(newIndex)) break
    }
    indexes.push(newIndex)
    setQuote(jsonArr[newIndex].quote)
    if (indexes.length > 1) setPrevActive(true)
  }

  const getPreviousQuote = () => {
    if (indexes.length > 1) {
      indexes.splice(indexes.length - 1, 1)
      setQuote(jsonArr[indexes[indexes.length - 1]].quote)
      if (indexes.length <= 1) setPrevActive(false)
    }
  }

  return (
    <div className='App'>
      <Header className='header' title='Random quote from API generator' />
      <div className='main-wrapper'>
        <Quote className='quote' quote={quote} />
        <Button
          bgColor={bgColor}
          active={prevBtnActive}
          onClick={getPreviousQuote}
          text='Get previous quote!'
        />
        <Button onClick={changeQuote} text='Generate new quote!' />
      </div>
    </div>
  )
}

export default App
