const API_KEY = '5Muqe6HOngq40S9xI6ZQJ7jDfvZUoS5f'
const API_QUERY_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=`
export const API_TRENDING_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`

export const fetchGifsByQuery = async (query: string): Promise<{ /* TSFIXME */ }> => {
  const resp = await fetch(API_QUERY_URL + query)
  return resp.json()
}