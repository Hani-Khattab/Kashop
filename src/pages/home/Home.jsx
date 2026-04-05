import Products from '../../components/Products/Products'
import Hero from '../../components/Hero/Hero'
import BrandsSection from '../../components/Brands/BrandsSection'
import PromoSection from '../../components/Promo/PromoSection'
import FeaturedSection from '../../components/Feature/FeaturedSection'
import ServicesSection from '../../components/Services/ServicesSection'
import HeroSecoundary from '../../components/Hero/HeroSecoundary'

export default function Home() {

  return (
    <div>
      <Hero />
      <BrandsSection />
      <PromoSection />
      <Products />      
      <FeaturedSection />
      <ServicesSection />
      <HeroSecoundary />
      
      
    </div>
  )
}
