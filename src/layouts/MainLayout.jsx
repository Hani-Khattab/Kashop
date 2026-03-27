import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import { Container } from '@mui/material'
import Hero from '../components/Hero/Hero'

export default function MainLayout() {
  return (
    <>
    <Navbar />
     <Hero />
        <Container maxWidth='lg'>
        <Outlet />
        </Container>

    <Footer />

    </>
  )
}
