// real code is that
// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to the Home Screen</Text>
//       <Button
//         title="Go to Login"
//         onPress={() => navigation.navigate('Login')}
//       />
//       <Button
//         title="Go to Signup"
//         onPress={() => navigation.navigate('Signup')}
//       />
//       <Button
//         title="Go to Dashboard"
//         onPress={() => navigation.navigate('Dashboard')}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
// });

// export default HomeScreen;


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';

// const Tab = createBottomTabNavigator();

// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to the Home Screen</Text>
//     </View>
//   );
// };

// const SearchScreen = () => (
//   <View style={styles.container}>
//     <Text>Search Screen</Text>
//   </View>
// );

// const CreateScreen = () => (
//   <View style={styles.container}>
//     <Text>Create Screen</Text>
//   </View>
// );

// const MessageScreen = () => (
//   <View style={styles.container}>
//     <Text>Message Screen</Text>
//   </View>
// );

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
//         <Tab.Screen name="Search" component={SearchScreen} />
//         <Tab.Screen name="Create" component={CreateScreen} />
//         {/* <Tab.Screen name="Message" component={MessageScreen} /> */}
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
// });

// export default App;

import React from 'react';
import { View, Text, SafeAreaView, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const services = [
    { id: 1, name: 'Cleaning', icon: '🏠' },
    { id: 2, name: 'Painting', icon: '🎨' },
    { id: 3, name: 'Repairing', icon: '🔧' },
    { id: 4, name: 'Laundry', icon: '👕' },
  ];

  const popularServices = [
    {
      id: 1,
      name: 'Home Cleaning',
      rating: 4.5,
      price: '$25/hour',
      discount: '25% OFF',
      image: require('./assets/cleaning.jpg'),
    },
    {
      id: 2,
      name: 'Gardening',
      rating: 3.5,
      price: '$18/hour',
      image: require('./assets/gardening.jpg'),
    },
    {
      id: 3,
      name: 'Office Cleaning',
      rating: 5.0,
      price: '$30/hour',
      image: require('./assets/office.jpg'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello Maria,</Text>
          <Text style={styles.title}>Which service do you need?</Text>
        </View>

        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="How Can I Help You?" placeholderTextColor="#666" />
          <TouchableOpacity style={styles.micButton}>
            <Icon name="mic" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.serviceCategories}>
          {services.map((service) => (
            <TouchableOpacity key={service.id} style={styles.serviceItem} onPress={() => navigation.navigate(service.name)}>
              <View style={styles.serviceIcon}>
                <Text style={styles.serviceEmoji}>{service.icon}</Text>
              </View>
              <Text style={styles.serviceName}>{service.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.popularSection}>
          <Text style={styles.sectionTitle}>Popular Services ⭐️</Text>
          {popularServices.map((service) => (
            <View key={service.id} style={styles.serviceCard}>
              <Image source={service.image} style={styles.serviceImage} />
              <View style={styles.serviceInfo}>
                <View style={styles.ratingContainer}>
                  <Icon name="star" size={16} color="#FFD700" />
                  <Text style={styles.rating}>{service.rating}</Text>
                </View>
                <Text style={styles.serviceName}>{service.name}</Text>
                <Text style={styles.servicePrice}>{service.price}</Text>
                {service.discount && <Text style={styles.discount}>{service.discount}</Text>}
                <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('Booking', { serviceId: service.id })}>
                  <Text style={styles.bookButtonText}>BOOK SERVICE</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        {['home', 'bookmark', 'plus-circle', 'message-circle', 'user'].map((iconName, index) => (
          <TouchableOpacity key={index} style={styles.navItem}>
            <Icon name={iconName} size={24} color={index === 0 ? '#1E88E5' : '#666'} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 60, // To prevent overlap with the bottom nav
  },
  header: {
    padding: 20,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3054',
    marginTop: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    paddingHorizontal: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    height: 50,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  micButton: {
    backgroundColor: '#1E88E5',
    padding: 8,
    borderRadius: 8,
  },
  serviceCategories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  serviceItem: {
    alignItems: 'center',
  },
  serviceIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#F0F7FF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  serviceEmoji: {
    fontSize: 24,
  },
  serviceName: {
    fontSize: 14,
    color: '#1E3054',
    marginTop: 4,
  },
  popularSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E3054',
    marginBottom: 15,
  },
  serviceCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  serviceInfo: {
    flex: 1,
    padding: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 4,
    color: '#666',
  },
  servicePrice: {
    color: '#666',
    marginTop: 4,
  },
  discount: {
    color: '#1E88E5',
    fontWeight: 'bold',
    marginTop: 4,
  },
  bookButton: {
    backgroundColor: '#1E88E5',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navItem: {
    padding: 8,
  },
});
