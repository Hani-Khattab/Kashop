import React from 'react'
import Products from '../../components/Products/Products'
import CategoriesSection from '../../components/categories/CategoriesSection'
import Hero from '../../components/Hero/Hero'
import BrandsSection from '../../components/Brands/BrandsSection'

export default function Home() {

  return (
    <div>
      <Hero />
      <BrandsSection />
      <CategoriesSection />
      <Products />
    </div>
  )
}
