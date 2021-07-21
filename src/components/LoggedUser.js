import React from 'react';
import {Text} from 'react-native';
import componentStyle from './componentStyle';
import If from './If';

export default props => {
  const user = props.user || {};

  return (
    <>
      {/* <If test={user && Object.keys(user).length !== 0}> */}
      <If test={user && user.name && user.email}>
        <Text style={componentStyle.bigText}>Logged User:</Text>
        <Text style={componentStyle.bigText}>
          {user.name} - {user.email}
        </Text>
      </If>
    </>
  );
};
