import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

import BottomSheet from '~/components/BottomSheet';
import ButtonsRight from '~/components/ButtonsRight';
import { executeQueryInterno } from '~/services/dbUtil';
import { GetUsers } from '~/services/Users/GetUsers';
import { selectUsers } from '~/sql/users';
import { signOut } from '~/store/modules/auth/actions';
import {
  Container,
  FormInput,
  ContainerIndicator,
  ListUsers,
  ContainerUser,
  Avatar,
  DataUser,
  Nome,
  Email,
  EmptyUser,
} from './styles';
import FloatingButton from '~/components/FloatingButton';

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [viewSearch, setViewSearch] = useState(false);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [openOptions, setOpenOptions] = useState(false);

  function returnRequest(data) {
    setLoading(false);
    setUsers(data);
  }

  async function GetUsersDB() {
    const usersDb = await executeQueryInterno(selectUsers());

    setUsers(usersDb);
    setLoading(false);
  }

  useEffect(() => {
    NetInfo.fetch().then((state) => {
      GetUsersDB();
      if (state.isConnected) GetUsers(returnRequest);
    });
  }, []);

  function handleFilter(value) {
    let filteredDataLet = filteredData;
    setSearch(value);

    if (search.length) {
      filteredDataLet = users.filter((item) => {
        const startsWithCondition =
          item.first_name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.last_name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase());
        const includesCondition =
          item.first_name.toLowerCase().includes(value.toLowerCase()) ||
          item.last_name.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase());

        if (startsWithCondition) {
          return startsWithCondition;
        }
        if (!startsWithCondition && includesCondition) {
          return includesCondition;
        }
        return null;
      });
      setFilteredData(filteredDataLet);
    }
  }

  const setViewInputSearch = useCallback(
    function setViewInputSearch() {
      setViewSearch(!viewSearch);
    },
    [viewSearch]
  );

  const abreMenu = useCallback(
    function abreMenu() {
      setOpenOptions(!openOptions);
    },
    [openOptions]
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ButtonsRight
          navigation={navigation}
          viewInputSearch={setViewInputSearch}
          abreMenu={abreMenu}
        />
      ),
    });
  }, [navigation, setViewInputSearch, abreMenu]);

  function confirmLogout() {
    setOpenOptions(!openOptions);

    setTimeout(() => {
      Alert.alert(
        'Atenção',
        'Deseja realmente sair do app?',
        [
          {
            text: 'Sim',
            onPress: () => dispatch(signOut()),
          },
          {
            text: 'Não',
          },
        ],
        { cancelable: false }
      );
    }, 100);
  }

  return (
    <Container>
      {loading ? (
        <ContainerIndicator>
          <ActivityIndicator />
        </ContainerIndicator>
      ) : (
        <>
          {viewSearch && (
            <FormInput
              icon="search"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Pesquisar"
              value={search}
              onChangeText={(value) => handleFilter(value)}
            />
          )}

          <ListUsers
            data={search.length ? filteredData : users}
            renderItem={({ item }) => (
              <ContainerUser>
                <Avatar source={{ uri: item.avatar }} />
                <DataUser>
                  <Nome>{`${item.first_name} ${item.last_name}`}</Nome>
                  <Email>{item.email}</Email>
                </DataUser>
              </ContainerUser>
            )}
            ListEmptyComponent={
              <EmptyUser>Nenhum usuário encontrado</EmptyUser>
            }
          />

          <FloatingButton />
        </>
      )}

      {/* BOTTOM SHEET */}
      <BottomSheet
        options={[
          {
            id: 0,
            title: 'Sair do App',
            icon: 'log-out-outline',
            onClick: confirmLogout,
          },
        ]}
        activeMenu={openOptions}
        abreMenu={abreMenu}
      />
    </Container>
  );
}
