import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Button,
  ActivityIndicator,
  Alert,
  RefreshControl,
} from 'react-native';
import {styles} from './styles';
import {CardComponent} from '../../components';
import {API_END_POINT} from '../../utils/apiEndPoint';
import {BLACK} from '../../utils/color';

function DashboardScreen({navigation}) {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const getApiData = async byRefresh => {
    if (byRefresh) {
      setRefreshing(true);
    }
    const response = await fetch(API_END_POINT);
    if (response.status === 200) {
      const json = await response.json();
      setData(json);
      setLoading(false);
      setRefreshing(false);
    } else {
      setLoading(false);
      Alert.alert('Something Went Wrong');
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <Button
          color={BLACK}
          onPress={() => getApiData(true)}
          title="Refresh"
        />
      ),
    });
  }, [navigation]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => getApiData(true)}
          />
        }
        renderItem={({item}) => (
          <CardComponent
            onPress={() => navigation.navigate('PostDetails', {item})}
            title={item.title}
            body={item.body}
          />
        )}
      />
    </View>
  );
}

export default DashboardScreen;
