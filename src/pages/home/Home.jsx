import Products from '../../components/Products/Products'
import Hero from '../../components/Hero/Hero'
import BrandsSection from '../../components/Brands/BrandsSection'
import PromoSection from '../../components/Promo/PromoSection'
import FeaturedSection from '../../components/Feature/FeaturedSection'
import ServicesSection from '../../components/Services/ServicesSection'
import HeroSecoundary from '../../components/Hero/HeroSecoundary'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <Box sx={{ overflowX: 'hidden', width: '100%' }}> 
      <Hero />
      <BrandsSection />
      <PromoSection />
      <FeaturedSection />
      <ServicesSection />
      <HeroSecoundary />
    </Box>
  )
}