import { NextSeo } from 'next-seo'

// import { useColorMode } from '@chakra-ui/color-mode'

import { DefaultLayout } from 'layouts/default'

import { Button } from 'components/button'

import { Flex } from 'components/layout'
import { usePokemons } from '../hooks/usePokemons'

const HomePage = () => {
  // const { colorMode, toggleColorMode } = useColorMode()
  const { pokemons, fetchNextPage } = usePokemons()
  console.log(pokemons)
  return (
    <>
      <NextSeo title="Home" />

      <DefaultLayout>
        <Flex direction="column" h="100vh" justify="center" align="center">
          <ul>
            {pokemons?.map((pokemon) => (
              <li key={pokemon.name}>{pokemon.name}</li>
            ))}
          </ul>
          <Button onClick={() => fetchNextPage()}>Load next page</Button>
        </Flex>
      </DefaultLayout>
    </>
  )
}

export default HomePage
