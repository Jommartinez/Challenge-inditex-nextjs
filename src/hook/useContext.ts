'use client'

import { characterContext } from '@/context/context'
import { useContext } from 'react'

export const useCharacterContext = () => useContext(characterContext)
