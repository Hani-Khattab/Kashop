import React from 'react'
import Products from '../../components/Products/Products'
import CategoriesSection from '../../components/categories/CategoriesSection'
import Hero from '../../components/Hero/Hero'

export default function Home() {

  return (
    <div>
      <CategoriesSection />
      <Products />
    </div>
  )
}
