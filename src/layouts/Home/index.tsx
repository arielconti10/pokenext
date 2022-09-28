import { usePokemons } from 'hooks/usePokemons'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Box, Flex } from 'components/layout'
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
                bgColor="red"
                w={'sm'}
                key={pokemon.name}
                margin="5"
                h="150px"
              >
                {pokemon.name}
              </Box>
            ))}
          </Flex>
        </InfiniteScroll>
      )}
    </Box>
  )
}

export default HomeLayout
