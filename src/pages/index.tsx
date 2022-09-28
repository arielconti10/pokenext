import { NextSeo } from 'next-seo'
import { DefaultLayout } from 'layouts/default'
import { Flex } from 'components/layout'
import HomeLayout from 'layouts/Home'

const HomePage = () => {
  return (
    <>
      <NextSeo title="Home" />

      <DefaultLayout>
        <Flex direction="column" h="100vh">
          <HomeLayout />
        </Flex>
      </DefaultLayout>
    </>
  )
}

export default HomePage
