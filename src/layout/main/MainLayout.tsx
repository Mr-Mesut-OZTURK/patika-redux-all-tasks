import React from 'react'
import MainNavbar from './_MainNavbar'
import { Box, Container } from '@mui/material'
import MainFooter from './_MainFooter'

interface MainLayoutTypes {
  children: React.ReactNode,
  routes: {
    main: Array<string>,
    settings: Array<string>
  }
}

const MainLayout = ({ children, routes }: MainLayoutTypes) => {
  return (
    <Box
      sx={{
        minHeight: "100%",
        pt: '100px',
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >

      <MainNavbar routes={routes} />

      <Container
        sx={{
          height: "100%",
          flex: 1,
          pt: '100px',
          pb: '200px',
        }}
      >
        {children}
      </Container>

      <MainFooter />

    </Box>
  )
}

export default MainLayout