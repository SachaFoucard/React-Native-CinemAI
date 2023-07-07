import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import genreId from '../data/genres.json';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderHome = ({ film }) => {
  const { width } = Dimensions.get('window');
  const [activeIndex, setActiveIndex] = useState(0);

  const renderCarouselItem = ({ item, index }) => (
    <View style={styles.carouselItem}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/original/${item?.backdrop_path}` }} style={styles.imgHEADER} />
      <Text style={styles.title}>
        {item?.title.length > 12 ? `${item?.title.substring(0, 12)}...` : item?.title}
      </Text>
      <Text style={styles.genres}>
        {item?.genre_ids?.map((genreId, index, array) => (
          <Text key={genreId}>{getGenreName(genreId)}{index !== array.length - 1 ? ', ' : ', ...'}</Text>
        ))}
      </Text>
      <View style={styles.rowBts}>
        <TouchableOpacity style={styles.btnPlay}>
          <Text style={styles.text}><Ionicons style={styles.icon} name="play-circle" /> Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnMylist}>
          <Text style={styles.text}>+ My List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );



  //function to transform the number reference id into the type (horror,comedy)
  const getGenreName = (id) => {
    const genre = genreId.find((genre) => genre.id === id);
    return genre ? genre.type : '';
  };

  // function to know on which film am I
  const handleSnapToItem = (index) => {
    setActiveIndex(index);
    // Perform any additional actions based on the active item index
    console.log('Active Item Index:', index);
  };

  return (
    <View>
      <Carousel
        data={film}
        renderItem={renderCarouselItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={handleSnapToItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgHEADER: {
    width: '100%',
    height: 380,
    position: 'relative', // Added position relative
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: '800',
    position: 'absolute',
    left: '5%',
    top: '63%',
    zIndex: 1, // Added zIndex to ensure the title appears above the genres
  },
  carouselItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    borderRadius: 5,
    overflow: 'hidden',
    width: '100%',
    height: 380,
  },
  genres: {
    position: 'absolute',
    left: '5%',
    top: '74%', // Adjusted the top position to avoid overlapping with the title
    color: 'white',
    zIndex: 1, // Added zIndex to ensure the genres appear above the image
  },
  rowBts: {
    flexDirection: 'row',
    position: 'absolute',
    left: '5%',
    top: '85%'
  },
  btnPlay: {
    width: 100,
    height: 30,
    backgroundColor: 'red',
    borderRadius: 40,
  },
  btnMylist: {
    width: 100,
    height: 30,
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 40,
  },
  icon: {
    fontSize: 20,
    color: 'white'
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
    alignSelf: 'center',
    marginTop: 1.5
  }
});

export default HeaderHome;
