import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Button, Title} from 'react-native-paper';
const Form = () => {
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Salary, setSalary] = useState('');

  return (
    <View style={styles.root}>
      <View style={styles.formContainer}>
        <Title style={{textAlign: 'center'}}>Consumer Form</Title>
        <TextInput
          label="Name"
          style={styles.inputStyle}
          value={Name}
          mode="outlined"
          theme={theme}
          onChangeText={text => setName(text)}
        />
        <TextInput
          label="Phone"
          style={styles.inputStyle}
          value={Phone}
          mode="outlined"
          theme={theme}
          keyboardType="number-pad"
          onChangeText={text => setPhone(text)}
        />
        <TextInput
          label="Email"
          style={styles.inputStyle}
          value={Email}
          mode="outlined"
          theme={theme}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          label="Salary"
          style={styles.inputStyle}
          value={Salary}
          mode="outlined"
          theme={theme}
          onChangeText={text => setSalary(text)}
        />
        <Button style={styles.inputStyle} mode="contained" theme={theme}>
          Save
        </Button>
      </View>
    </View>
  );
};
const theme = {
  colors: {
    primary: '#006aff',
  },
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inputStyle: {
    margin: 5,
  },
  formContainer: {
    margin: 12,
  },
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  modelView: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
    backgroundColor: '#fff',
  },
});
export default Form;
