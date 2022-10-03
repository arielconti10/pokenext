import { useInfinitePokemons, PokemonsF } from 'services/graphql'
import { useGraphQLClient } from '../providers/hooks/useGraphQLClient'
import { useQueryStatusLogging } from './useQueryStatusLogging'

export function usePokemons() {
  const { graphQLClient } = useGraphQLClient()
  const pageSize = 18

  const queryInfo = useInfinitePokemons(
    'offset',
    graphQLClient,
    {
      limit: pageSize,
      offset: 0,
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.pokemons.length < pageSize) {
          return undefined
        }

        return { offset: allPages.length * pageSize + 1 }
      },
      onSuccess: () => {
        console.log(Date.now(), 'Feching pokemons succeed')
      },
    },
  )

  useQueryStatusLogging(queryInfo, 'pokemons')

  const pokemons = queryInfo.data?.pages.reduce<Array<PokemonsF>>(
    (prev: Array<PokemonsF>, curr) => {
      return [...prev, ...curr.pokemons]
    },
    [],
  )

  return {
    ...queryInfo,
    pokemons,
  }
}
