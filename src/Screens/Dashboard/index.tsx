import { FC, useEffect, useState } from 'react'
import { View, Text, ViewProps } from 'react-native'
import { UserCard } from '../../Comps/UserCard'
import { users as data } from '../../Data/users'

interface UserProps {
  Image: string
  name: string
  id: string
}

const Dashboard: FC = () => {
  const users = useState<UserProps[]>(data)

  useEffect(() => {
    fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json', {
      method: 'GET',
    }).then((res) => {
      console.log(res)
      console.log(users)
    })
  })

  const handleSelected = (_name: string) => {
    console.log(name)
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Create Group</Text>
      </View>
      <View style={styles.containerUsers}>
        {users.map(({ item }: any) => (
          <UserCard name={item?.name} onPress={handleSelected} imageUrl={item?.Image} isSelected={true} />
        ))}
      </View>
    </View>
  )
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
  } as ViewProps,
  containerUsers: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    flex: 1,
  } as ViewProps,
}

export { Dashboard }
