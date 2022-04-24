import { Text, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';



export default function App() {
  const [posts, setPosts ] = useState([]);

  useEffect(() => {
    fetch('https://lager.emilfolino.se/167cf21bd2ad31089ba25b3955e9c28b')
      .then(response => response.json())
      .then(result => setPosts(result.data))
  }, []);
const listOfPosts = posts . map((post, index) =>{
  return <Text key={index} style={{fontSize:40, marginBottom:32}}> {post.name}: {post.stock}:
  </Text>
});
return (
  <ScrollView>
      {listOfPosts}
  </ScrollView>
);
}