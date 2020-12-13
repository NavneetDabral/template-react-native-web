import { FC } from 'react'
import { ImageStyle, Image } from 'react-native'

interface SelectedIconProps {
  show: boolean
}

const selectedImage =
  'https://png.pngtree.com/png-clipart/20190516/original/pngtree-tick-vector-icon-png-image_4015270.jpg'

const IconSelcted: FC<SelectedIconProps> = ({ show }: SelectedIconProps) => {
  if (!show) {
    return null
  }
  return <Image resizeMode="cover" style={styles.imageStyle} source={{ uri: selectedImage }} />
}

const styles = {
  imageStyle: {
    height: 24,
    width: 24,
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1,
    borderRadius: 12,
  } as ImageStyle,
}

export { IconSelcted }
