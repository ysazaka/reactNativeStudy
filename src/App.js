import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import First from './components/First';
import MainFunctionFromMulti, { Side1, Side2 } from './components/Multi';
import MinMax from './components/MinMax';
import Random from './components/Random';
import Title from './components/Title';
import CustomButton from './components/CustomButton';
import Counter from './components/Counter';
import Father from './components/directCommunication/Father';
import Mother from './components/indirectCommunication/Mother';
import CounterV2 from './components/betterCounter/CounterV2';
import AndroidBetterThanIos from './components/AndroidBetterThanIos';
import EvenOrOdd from './components/EvenOrOdd';
import Family from './components/propsChildren/Family';
import FamilyMember from './components/propsChildren/FamilyMember';
import LoggedUser from './components/LoggedUser';
import ProductList from './components/list/ProductList';
import ProductListV2 from './components/list/ProductListV2';
import TypeYourName from './components/TypeYourName';
import FlexboxV1 from './components/flexbox/FlexboxV1';
import FlexboxV2 from './components/flexbox/FlexboxV2';
import FlexboxV3 from './components/flexbox/FlexboxV3';
import FlexboxV4 from './components/flexbox/FlexboxV4';
import MegaSena from './components/megasena/MegaSena';

export default () => {
  <SafeAreaView style={style.App}>
    <First />

    <MainFunctionFromMulti />
    <Side1 />
    <Side2 />

    <MinMax min={9} max={99} />

    <Random min={9} max={99} />

    <Title title="Título" subtitle="Subtítulo"/>

    <CustomButton />

    <Counter initialValue={100} />

    <Father />

    <Mother />

    <CounterV2 />

    <AndroidBetterThanIos />

    <EvenOrOdd number={7} />

    <Family>
      <FamilyMember name="João" lastName="cara de mamão" />
      <FamilyMember name="José" lastName="joga igual o Pelé" />
    </Family>

    <LoggedUser user={ {name:'Zangado', email:'zangadogames@gmail.com'} }/>
    <LoggedUser user={ {name:'Zangado'} }/>
    <LoggedUser user={ {email:'zangadogames@gmail.com'} }/>
    <LoggedUser user={ {} }/>

    <ProductList />

    <ProductListV2 />

    <TypeYourName />

    <FlexboxV1 />
    <FlexboxV2 />
    <FlexboxV3 />
    <FlexboxV4 />

    <MegaSena numberQuantity={6} />
  </SafeAreaView>
};

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16
    }
})