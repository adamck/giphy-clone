import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Link, Text } from '@chakra-ui/react';
import SearchBar from './components/SearchBar';
import useTrendingGifs from './hooks/useTrendingGifs';
import Masonry from 'react-masonry-component';
import Gif, { IGif } from './components/Gif';
import { fetchGifsByQuery } from './api/giphy';

function App() {
  const { data: trending, error: trendingError } = useTrendingGifs()
  const [searchQuery, setSearchQuery] = useState('')
  // TSFIXME
  const [searchResults, setSearchResults] = useState<any>()
  const [view, setView] = useState<'trending' | 'search'>('trending')

  if(trendingError) {
    // TODO
  }

  const onBackToTrending = () => {
    // TODO: make searchBar a controlled component w value query
    setSearchQuery('')
    setView('trending')
  }

  const onSearch = async (query: string) => {
    setSearchQuery(query)
    const results = await fetchGifsByQuery(query)

    setSearchResults(results)
    setView('search')
  }

  return (
    <Box maxW='1170px' margin='0 auto' mt='5'>
      <SearchBar onSearch={onSearch} />

      {/* TODO: loading states */}

      { view === 'trending' && trending &&
        <Masonry
          options={{
            // TODO: figure out these options 
            gutter: 20
          }}
        >
          { trending.data.map((gif: IGif) => <Gif gif={gif} key={gif.id} />) }
        </Masonry>
      }
      
      { view === 'search' && searchResults?.data &&
        <>
          <Link onClick={onBackToTrending}>Back to Trending Gifs</Link>
          <Text my='3'>Displaying results for "{ searchQuery }"</Text>
          <Masonry>
            { searchResults.data.map((gif: IGif) => <Gif gif={gif} key={gif.id} />)}
          </Masonry>
        </>
      }
    </Box>
  )
}

export default App;
