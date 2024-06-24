import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header as HeaderRNE, Icon, SearchBar} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, StyleSheet, Text} from 'react-native';
import UpperProducts from '../components/upperProducts';
import DropdownList from '../components/dropdownList';
import {useMediaQuery} from 'react-responsive';
import Search from '../assets/svg/search.svg';
import Bell from '../assets/svg/bell.svg';
import User from '../assets/svg/user.svg';

const UiPage: React.FC = () => {
  const [search, setSearch] = useState('');

  const isMobile = useMediaQuery({query: '(max-width: 768px)'});
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1024px)',
  });
  const isBigScreen = useMediaQuery({query: '(min-width: 1024px)'});

  return (
    <SafeAreaProvider>
      <HeaderRNE
        leftContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          borderLeftColor: 'orange',
        }}
        leftComponent={<Text style={{color: 'white'}}>MarketPlace</Text>}
        rightContainerStyle={{}}
        rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={() => {}}>
              <Bell width={30} height={30} />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 10}} onPress={() => {}}>
              <User width={30} height={30} />
            </TouchableOpacity>
          </View>
        }
        centerContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        centerComponent={
          <View
            style={[
              styles.centerHeader,
              isMobile && {width: '25%', height: '100%'},
            ]}>
            {isBigScreen && (
              <>
                <DropdownList />
                <SearchBar
                  containerStyle={{
                    backgroundColor: 'white',
                    height: '85%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  inputContainerStyle={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    width: '90%',
                    alignItems: 'center',
                  }}
                  inputStyle={{backgroundColor: 'white'}}
                  lightTheme={true}
                  placeholder="Type Here..."
                  onChangeText={setSearch}
                  value={search}
                  searchIcon={false}
                />
                <View>
                  <Search width={45} height={45} />
                </View>
              </>
            )}
            {isTablet && (
              <>
                <SearchBar
                  containerStyle={{
                    backgroundColor: 'white',
                    height: '85%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  inputContainerStyle={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    width: '90%',
                    alignItems: 'center',
                  }}
                  inputStyle={{backgroundColor: 'white'}}
                  lightTheme={true}
                  placeholder="Type Here..."
                  onChangeText={setSearch}
                  value={search}
                  searchIcon={false}
                />
              </>
            )}
            {isMobile && (
              <>
                <View>
                  <Search width={30} height={30} />
                </View>
              </>
            )}
            {}
          </View>
        }
        backgroundColor="darkgreen"
      />

      <UpperProducts />
      <UpperProducts />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    marginRight: 30,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  centerHeader: {
    width: '70%',
    height: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
  },
});

export default UiPage;
