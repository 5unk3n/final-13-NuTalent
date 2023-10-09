import { useEffect, useState } from 'react';
import React from 'react';

import { useSearchUser } from '../api/searchUser';
import UserList from '../components/UserList';

import HeaderBar from '@/components/Layout/MainLayout/HeaderBar';
import useDebounce from '@/hooks/useDebounce';

export default function SearchPage() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const debouncedSearchKeyword = useDebounce(searchKeyword);

  const { data: searchResult } = useSearchUser(debouncedSearchKeyword);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchKeyword]);

  return (
    <>
      <HeaderBar>
        <HeaderBar.BackButton />
        <HeaderBar.SearchInput
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </HeaderBar>
      <UserList userData={searchResult} />
    </>
  );
}
