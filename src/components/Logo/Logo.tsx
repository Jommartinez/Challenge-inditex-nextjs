import Image from 'next/image'

import logo from '@/assets/marvel-logo.svg'

export const Logo = () => {
  return <Image className="logo" src={logo} alt="Logo Marvel" width={130} height={52} />
}
