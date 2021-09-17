import React, { useEffect } from 'react';
import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import { ads } from '../../mock/ads';

import { styles } from './styles';
import { Avatar } from '../../components/Avatar';
import { AdCard } from '../../components/AdCard';

import Illustration02 from '../../assets/illustration-02.png';

export function HomeScreen() {
  const renderItem = ({ item }) => (
    <AdCard
      urlImage={item.urlImage}
      title={item.title}
      location={item.location}
      interestsNumber={item.interestsNumber}
      price={item.price}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar urlImage="http://github.com/vinixiii.png" />
        <View>
          <View style={styles.user}>
            <Text style={styles.greeting}>Olá, </Text>
            <Text style={styles.username}>Vinícius</Text>
          </View>

          <Text style={styles.message}>Hoje é dia de desapegar!</Text>
        </View>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerText}>
          O melhor site &amp; {'\n'}
          app de anúnicos {'\n'}
          do Brasil!
        </Text>
        <Image source={Illustration02} style={styles.image} />
      </View>

      <Text style={styles.title}>Anúncios recentes</Text>

      {/* <ScrollView
        style={styles.recentAds}
        horizontal
        showsHorizontalScrollIndicator={false}
      > */}
      <FlatList
        style={styles.recentAds}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={ads}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      {/* </ScrollView> */}
    </View>
  );
}
