import React, { } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useAppContext } from './provider/AppProvider';

const App = () => {

  const { repos, requestRepos, isLoading, onFilter } = useAppContext();

  const CardItems = ({ label }) => {
    return (
      <Text style={styles.cardItem}>{label}</Text>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.textRepo}>Repository</Text>
        <View style={styles.cardRepo}>
          <TextInput
            style={styles.inputSearchRepo}
            placeholderTextColor="#24292e"
            placeholder="Find a Repository..."
            onChangeText={onFilter} />

          {
            repos.map((item) => (
              <CardItems key={item.id.toString()} label={item.full_name} />
            ))
          }

          <Button
            disabled={isLoading}
            title="Button"
            onPress={() => requestRepos()}>
          </Button>
        </View>

        <View style={[styles.cardRepo, { padding: 16, }]}>
          <Text style={styles.textDiscover}>Discover interesting projects and people to populate your personal news feed.</Text>
          <Text>Your news feed helps you keep up with recent activity on repositories you <Text style={styles.textBlue}>watch</Text> and people you <Text style={styles.textBlue}>follow</Text></Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    backgroundColor: '#F3F6F9',
    flex: 1,
  },
  contentWrapper: {
    marginTop: 32,
  },
  textRepo: {
    fontSize: 16,
    fontWeight: '400',
  },
  cardRepo: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'white',
    marginTop: 8,
    marginBottom: 20,
    paddingBottom: 16,
  },
  inputSearchRepo: {
    borderRadius: 6,
    backgroundColor: '#F3F6F9',
    height: 30,
    paddingHorizontal: 12,
    paddingVertical: 5,
    lineHeight: 20,
    borderWidth: 1,
    borderColor: '#e1e4e8',
    marginBottom: 16,
  },
  cardItem: {
    color: '#0366d6',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
  textDiscover: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: '600',
  },
  textBlue: {
    color: '#0366d6',
  },
});

export default App;
