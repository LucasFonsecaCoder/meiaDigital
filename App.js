import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

const addMoney = require('./assets/images/add.png')
const pix = require('./assets/images/pix.png')
const onibus = require('./assets/images/onibus.png')
const qrcode = require('./assets/images/qrcode.png')
const ingressos = require('./assets/images/ingressos.png')
const cartaovirtual = require('./assets/images/cartaovirtual.png')
const transferencias = require('./assets/images/transferencias.png')
const bloquearcartao = require('./assets/images/bloquearcartao.png')
const cartoes = require('./assets/images/cartoes.png')

export default function App() {
  const [fonteLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if(!fonteLoaded){
    return null
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Meia Digital</Text>
        <View style={styles.headerSaldo}>
        <Text style={styles.saldoText}> Saldo disponível:</Text>
        <View style={styles.dinheiro}>
        <Text style={styles.dinheiroText}> R$200,00</Text>
        <Image source={addMoney} style={styles.dinheiroImage}></Image>
        </View>
        </View>
      </View>
      <View>

        <Text style={styles.bodyText}> Bem Vindo, Claúdio! </Text>


        <View style={styles.containerAreaPix}>
  <View style={styles.areaPix}>
    <Image source={pix} style={styles.areaPixImage} />
    <Text style={styles.areaPixText}>Área Pix</Text>
  </View>

  <View style={styles.opcoesAreaPix}>
  <View style={styles.opcaoContainer}>
    <Image source={onibus} style={styles.opcaoImage} />
    <Text style={styles.opcaoText}>Cartão De Transporte</Text>
  </View>

    <View style={styles.opcaoContainer}>
      <Image source={qrcode} style={styles.opcaoImage} />
      <Text style={styles.opcaoText}>QR Code</Text>
    </View>

    <View style={styles.opcaoContainer}>
      <Image source={ingressos} style={styles.opcaoImage} />
      <Text style={styles.opcaoText}>Ingressos</Text>
    </View>
  </View>
</View>
<View style={styles.containerAreaPix}>
  <View style={styles.areaPix}>
    <Image source={cartoes} style={styles.areaPixImage} />
    <Text style={styles.areaPixText}>Cartões</Text>
  </View>

  <View style={styles.opcoesAreaPix}>
  <View style={styles.opcaoContainer}>
    <Image source={cartaovirtual} style={styles.opcaoImage} />
    <Text style={styles.opcaoText} numberOfLines={1}>Cartão Virtual</Text>
  </View>

    <View style={styles.opcaoContainer}>
      <Image source={transferencias} style={styles.opcaoImage} />
      <Text style={styles.opcaoText}>Transferência</Text>
    </View>

    <View style={styles.opcaoContainer}>
      <Image source={bloquearcartao} style={styles.opcaoImage} />
      <Text style={styles.opcaoText}>Bloquear Cartão</Text>
    </View>
  </View>
</View>
</View>
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
  header: {
    backgroundColor: '#136F63',
    width: '100%',
    height: 200,
  },
  headerText: {
    marginTop: 70,
    marginLeft: 20,
    fontSize: 30,
    fontFamily: "Montserrat_700Bold",
    color: 'white',
  },
  headerSaldo:{
    marginLeft: 15,
    marginTop: 25,
  },
  saldoText: {
    fontSize: 20,
  },
  dinheiro: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dinheiroText: {
    fontSize: 25,
    fontWeight: 500,
  },
  dinheiroImage: {
    marginRight: 20,
    height: 30,
    width: 30,
  },
  bodyText: {
    marginTop: 35,
    marginLeft: 20,
    fontWeight: 600,
    fontSize: 22,
    fontFamily: 'Montserrat_500Medium',
  },
  containerAreaPix: {
    height: 204,
    width: 350,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 25,
    marginTop: 20,
  },
  areaPix: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingHorizontal: 10,
    marginTop: 10
  },
  areaPixImage: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  areaPixText: {
    fontSize: 20,
    fontFamily: 'Montserrat_400Regular',
  },
  opcoesAreaPix: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  opcaoContainer: {
    alignItems: 'center',
    width: 90,
    marginTop: 20
  },
  opcaoImage: {
    height: 70,
    width: 70,
  },
  opcaoText: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Montserrat_400Regular',
  },

});
