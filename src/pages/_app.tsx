import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
