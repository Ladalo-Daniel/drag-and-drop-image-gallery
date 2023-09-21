import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

export default function Layout({ searchQuery, setSearchQuery, setUser}) {
  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} setUser={setUser} />
      <Outlet />
    </>
  )
}
