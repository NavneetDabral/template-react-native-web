import { FC } from 'react'
import { View, Text, ViewProps, ImageStyle, ImageBackground, TouchableOpacity } from 'react-native'
import { IconSelcted } from '../IconSelected'

interface UserCardProps {
  imageUrl?: string
  name: string
  onPress: (name: string) => void
  isSelected: boolean
}

const fallBackImage = ''

const UserCard: FC<UserCardProps> = ({ imageUrl = fallBackImage, name, onPress, isSelected }: UserCardProps) => {
  const handlePress = () => {
    onPress(name)
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <IconSelcted show={isSelected} />
      <View style={styles.container}>
        <ImageBackground resizeMode="cover" style={styles.imageStyle} source={{ uri: imageUrl }} />
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = {
  container: {
    border: 'solid 1px',
    minHeight: 200,
    minWidth: 200,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  } as ViewProps,
  imageStyle: {
    height: '90%',
    width: '100%',
  } as ImageStyle,
}

export { UserCard }
