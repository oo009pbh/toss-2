import React from 'react';
import loadable from '@loadable/component'; // 코드 스플리팅
import { Routes, Route, Navigate } from 'react-router-dom';

const Main = loadable(() => import('@pages/Main'));

export const MainPageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/main"/>} />
            <Route path="/main" element={<Main />} />
        </Routes>
    );
};