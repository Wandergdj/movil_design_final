import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, ImageBackground} from 'react-native';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);
  const [animatedValue] = useState(new Animated.Value(1));

  // Función para mostrar la tabla de multiplicar
  const showMultiplicationTable = () => {
    let table = '';
    for (let i = 1; i <= 10; i++) {
      const result = contador * i;
      table += `${contador} x ${i} = ${result}\n`;
    }
    alert(table);
  };

  // Función para manejar el aumento del contador
  const handleIncrement = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
    setContador(contador + 1);
  };

  // Función para manejar la disminución del contador
  const handleDecrement = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
    setContador(contador - 3);
  };

  return (
    <ImageBackground
                            source={{ uri: 'https://i.pinimg.com/474x/31/5d/1a/315d1a6a84d4c46a86fb4865f6a2840e.jpg' }}
                            style={styles.container}>
    <View style={styles.container}>
        <Text style={styles.text}> Wander Roberto Genao 2020-0164</Text>
      <Animated.Text
        style={[styles.title, { transform: [{ scale: animatedValue }] }]}
      >
        Contador: {contador}
      </Animated.Text>


      {/* Botón para sumar 1 */}
      <TouchableOpacity
        style={styles.fabLocationBR}
        onPress={handleIncrement}
        activeOpacity={0.8}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>

      {/* Botón para restar 1 */}
      <TouchableOpacity
        style={styles.fabLocationBL}
        onPress={handleDecrement}
        activeOpacity={0.8}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>-3</Text>
        </View>
      </TouchableOpacity>

      {/* Botón para mostrar la tabla de multiplicar */}
      <TouchableOpacity
        style={styles.fabLocationTC}
        onPress={showMultiplicationTable}
        activeOpacity={0.8}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>Tabla</Text>
        </View>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    top: 80,
    textAlign: 'center',
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  fabLocationTC: {
    position: 'absolute',
    top: 25,
    alignSelf: 'center',
  },
  fab: {
    backgroundColor: 'red',
    width: 100,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabText: {
    fontSize: 20,
    color: 'white',
  },
  text: {
    fontSize: 20,
    width: '70%',
    top: -45,
    textAlign: 'center',
    alignSelf: 'center'
  }
});
