import { Body, Container, Header, Left, Right, Tab, Tabs as NativaTabs, Title } from 'native-base';
import React from 'react';
import ListsTab from './ListTab';
import TabOptions from './tabs.json';

const Tabs = () => {
  return (
    <Container>
      <Header style={{ backgroundColor: '#009387' }} hasTabs>
        <Left />
        <Body>
          <Title style={{ color: 'white' }}>Starter App</Title>
        </Body>
        <Right />
      </Header>
      <NativaTabs tabBarUnderlineStyle={{ backgroundColor: 'white' }}>
        {
          Object.keys(TabOptions).map((tab: string) => {
            return (
              <Tab
                key={tab}
                tabStyle={{ backgroundColor: '#009387' }}
                activeTabStyle={{ backgroundColor: '#009387' }}
                textStyle={{ color: 'white' }}
                activeTextStyle={{ color: 'white' }}
                //@ts-ignore
                heading={TabOptions[tab].name}>
                <ListsTab />
              </Tab>
            )
          })
        }
      </NativaTabs>
    </Container >
  );
}

export default Tabs
