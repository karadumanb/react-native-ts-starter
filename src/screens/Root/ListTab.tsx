import { Container, List } from 'native-base';
import React from 'react';
import Loading from '../../components/general/loading';
import ListItem from '../../modules/list/Item';

const ListTab = () => {
  // const {loading, response = []} = useFetch(news.index);
  const loading = false;
  const response = ['First', 'Second'];

  return (
    <Container>
      {loading && <Loading loading={loading} />}
      {
        !loading && (
          <List
            dataArray={response}
            keyExtractor={(_, index: number) => index.toString()}
            renderRow={(item, index) => {
              return (
                <ListItem key={`item-${index}`} data={item} />
              )
            }} />
        )
      }
    </Container>
  );
}

export default ListTab;
