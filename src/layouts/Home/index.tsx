import { usePokemons } from 'hooks/usePokemons'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Box, Flex } from 'components/layout'
import { chakra } from '@chakra-ui/system'
import Image from 'next/image'
const HomeLayout = () => {
  const { pokemons, fetchNextPage, isLoading, hasNextPage } = usePokemons()
  return (
    <Box minH="100vh">
      {!isLoading && pokemons && (
        <InfiniteScroll
          hasMore={hasNextPage as boolean}
          dataLength={pokemons.length}
          next={fetchNextPage}
          scrollThreshold={1}
          loader={<h4>Loading...</h4>}
        >
          <Flex flexWrap="wrap" justify="center">
            {pokemons?.map((pokemon) => (
              <Box
                borderRadius="10px"
                boxShadow="0 0 10px rgba(0,0,0,0.2)"
                _hover={{ boxShadow: '0 0 10px rgba(0,0,0,0.4)' }}
                w={'sm'}
                key={pokemon.name}
                margin="1rem"
                padding="1rem"
                h={300}
                cursor="pointer"
              >
                <Flex direction="column" justify="center" align="center">
                  <chakra.figure>
                    <Image
                      src={
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
                        pokemon.id +
                        '.png'
                      }
                      loading="lazy"
                      width={240}
                      height={240}
                    />
                  </chakra.figure>
                  <chakra.span>{pokemon.name}</chakra.span>
                </Flex>
              </Box>
            ))}
          </Flex>
        </InfiniteScroll>
      )}
    </Box>
  )
}

export default HomeLayout
