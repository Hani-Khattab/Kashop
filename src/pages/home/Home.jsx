import React from 'react'
import Products from '../../components/Products/Products'
import CategoriesSection from '../../components/categories/CategoriesSection'
import Hero from '../../components/Hero/Hero'
import BrandsSection from '../../components/Brands/BrandsSection'
import PromoSection from '../../components/Promo/PromoSection'
import FeaturedSection from '../../components/Feature/FeaturedSection'
import ServicesSection from '../../components/Services/ServicesSection'

export default function Home() {

  return (
    <div>
      <Hero />
      <BrandsSection />
      <PromoSection />
      <Products />
      <FeaturedSection />
      <ServicesSection />
      
      
    </div>
  )
}
