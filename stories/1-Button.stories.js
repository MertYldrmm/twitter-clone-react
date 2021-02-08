import React from 'react'

import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>SAVE</Button>

export const NavButton = () => <NavigationButton>SAVE</NavigationButton>

export const Nav = () => <Navigation />
