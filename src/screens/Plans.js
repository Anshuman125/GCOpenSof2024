import React from "react";
import { Text } from "react-native";
import Scroller from "../components/Pressable";
import { NativeBaseProvider, Center } from "native-base";
import Example from '../components/Pressable'; // Assuming ExampleComponentFile.js is in the same directory

const Plans = () => {
  return (
    // <NativeBaseProvider>
    //   <Center flex px={"3"}>
    //     <Example/>
    //   </Center>
    // </NativeBaseProvider>
    <Scroller/>
  );
};

export default Plans;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
// });

// export default Plans;
// export default class Plans extends React.Component {
//   render() {

//     return <Box alignItems="center">
//         <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
//           <Box>
//             <HStack alignItems="center">
//               <Badge colorScheme="darkBlue" _text={{
//               color: "white"
//             }} variant="solid" rounded="4">
//                 Business
//               </Badge>
//               <Spacer />
//               <Text fontSize={10} color="coolGray.800">
//                 1 month ago
//               </Text>
//             </HStack>
//             <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
//               Marketing License
//             </Text>
//             <Text mt="2" fontSize="sm" color="coolGray.700">
//               Unlock powerfull time-saving tools for creating email delivery and
//               collecting marketing data
//             </Text>
//             <Flex>
//               <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
//                 Read More
//               </Text>
//             </Flex>
//           </Box>
//         </Pressable>
//       </Box>;
//     }
//   }
  
