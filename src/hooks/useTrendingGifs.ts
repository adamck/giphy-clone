import { IGif } from './../components/Gif';
import { API_TRENDING_URL } from './../api/giphy';
import useSWR from "swr";

const useTrendingGifs = () => {
  // TSFIXME { data, pagination, meta }
  return useSWR<{ data: IGif[] }>(API_TRENDING_URL, 
  // TODO: maybe just use fetch here. swr can be overkill
  // {
  //   revalidateOnFocus: false,
  //   revalidateOnMount:false,
  //   revalidateOnReconnect: false,
  //   refreshWhenOffline: false,
  //   refreshWhenHidden: false,
  //   refreshInterval: 0
  // }
  )
}

export default useTrendingGifs