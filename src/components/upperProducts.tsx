import {PricingCard, lightColors} from '@rneui/base';
import React, {useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {Clothes} from '../constants/clothes';
import {Sports} from '../constants/sports';
import {Electronic} from '../constants/electronic';
import {useMediaQuery} from 'react-responsive';

const UpperProducts: React.FC = () => {
  const [sports, setSport] = useState(Sports);
  const [electronic, setElectronic] = useState(Electronic);
  const [clothes, setClothes] = useState(Clothes);
  const isMobile = useMediaQuery({query: '(max-width: 768px)'});
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1024px)',
  });
  const isBigScreen = useMediaQuery({query: '(min-width: 1024px)'});
  return (
    <View style={{flexDirection: 'row', flex: 1}}>
      <View style={{width: '10%', flex: 1}}>
        <View>
          <View style={{marginLeft: 20, marginTop: 20}}>
            <Text>Sports Materials</Text>
          </View>
        </View>
        <FlatList
          data={sports}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          horizontal={false}
          renderItem={({item}) => (
            <PricingCard
              color={lightColors.primary}
              title={item.name}
              price={item.price + '$'}
              info={['Perfect Colors', 'All Features Wanted On A Bicycle']}
              button={{title: 'Add the Cart'}}
              containerStyle={{
                width: '40%',
                minHeight: '90%',
              }}
              titleStyle={{
                fontSize: 16,
              }}
              pricingStyle={{
                fontSize: 12,
              }}
            />
          )}
        />
      </View>
      <View style={{width: '100%', flex: 1}}>
        <View>
          <View style={{marginLeft: 20, marginTop: 20}}>
            <Text>Electronics</Text>
          </View>
        </View>
        <FlatList
          data={electronic}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          horizontal={false}
          renderItem={({item}) => (
            <PricingCard
              color={lightColors.primary}
              title={item.name}
              price={item.price + '$'}
              info={['Perfect Colors', 'All Features Wanted On A Bicycle']}
              button={{title: 'Add the Cart'}}
              containerStyle={{
                width: '40%',
                marginRight: 10,
                minHeight: '90%',
              }}
              titleStyle={{
                fontSize: 16,
              }}
              pricingStyle={{
                fontSize: 12,
              }}
            />
          )}
        />
      </View>
      <View style={{width: '100%', flex: 1}}>
        <View>
          <View style={{marginLeft: 20, marginTop: 20}}>
            <Text>Clothes</Text>
          </View>
        </View>
        <FlatList
          data={clothes}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          horizontal={false}
          renderItem={({item}) => (
            <PricingCard
              color={lightColors.primary}
              title={item.name}
              price={item.price + '$'}
              info={['Perfect Colors', 'All Features Wanted On A Bicycle']}
              button={{title: 'Add the Cart'}}
              containerStyle={{
                width: '40%',
                marginRight: 10,
                minHeight: '90%',
              }}
              titleStyle={{
                fontSize: 16,
              }}
              pricingStyle={{
                fontSize: 12,
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default UpperProducts;
