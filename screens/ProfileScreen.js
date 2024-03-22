import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Heading from '../components/Heading';
import Avatar from '../components/Avatar';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profile: {
    // backgroundColor: '#f9f9f9',
    flexDirection: 'row',
    // padding: 20,
    // margin: 10,
    borderRadius: 0,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileDescription: {
    fontSize: 16,
  },
});

const ProfileScreen = () => {
    const navigation = useNavigation();
    const profiles = ['John Doe', 'Jane Doe', 'Jim Doe']

    return (
    <View style={styles.container} >
      <Heading />
        <View style={styles.profile}>
            {profiles.map((profile, index) => (
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                <Avatar key={index} label={profile}/>
                </TouchableOpacity>
            ))}
            </View>
    </View>
  );
}

export default ProfileScreen