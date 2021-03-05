import { Box, Image } from "@chakra-ui/react"

export interface IGif {
  type: 'gif' | 'sticker'
  url: string
  // TSFIXME
  images: {
    fixed_width: {
      url: string
    }
  }
  id: string
}

const Gif = ({ gif }: { gif: IGif }) => 
  <Box w='150px' h='150px' my='20px'>
    <Image src={gif.images.fixed_width!.url!} boxSize='150px' objectFit='cover' />
  </Box>
  
export default Gif