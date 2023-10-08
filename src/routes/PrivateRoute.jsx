import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { recoilData } from '../recoil/atoms/dataState';

export default function PrivateRoutes() {
  const isLoggedIn = useRecoilValue(recoilData);

  return isLoggedIn.length === 0 ? <Navigate to="/login" /> : <Outlet />;
}
