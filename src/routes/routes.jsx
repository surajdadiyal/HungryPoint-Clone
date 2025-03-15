import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../../scrollToTop';
import Transition from '../animations/transition';
import Footer from '../layout/footer';
import Navbar from '../layout/navbar';

const Blog = lazy(() => import('../pages/blog'));
const Breads = lazy(() => import('../pages/bread'));
const Burger = lazy(() => import('../pages/burger'));
const Contact = lazy(() => import('../pages/contact'));
const Fries = lazy(() => import('../pages/fries'));
const Home = lazy(() => import('../pages/home'));
const JobVacancy = lazy(() => import('../pages/jobvacancy'));
const PageNotFound = lazy(() => import('../pages/404'));
const Mini = lazy(() => import('../pages/mini'));
const PartnerWithUs = lazy(() => import('../pages/partner'));
const Pasta = lazy(() => import('../pages/pasta'));
const Pizza = lazy(() => import('../pages/pizza'));
const PrivacyPolicy = lazy(() => import('../pages/privacy'));
const RefundPolicy = lazy(() => import('../pages/refundpolicy'));
const Sandwich = lazy(() => import('../pages/sandwich'));
const Shakes = lazy(() => import('../pages/shakes'));
const TermsConditions = lazy(() => import('../pages/terms-condition'));
const Wraps = lazy(() => import('../pages/wraps'));

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <Transition Component={Home} />
          }
        />
        <Route
          path='/partner-with-us'
          element={
            <Transition Component={PartnerWithUs} />
          }
        />
        <Route
          path='/job-vacancy'
          element={
            <Transition Component={JobVacancy} />
          }
        />
        <Route
          path='/contact-us'
          element={
            <Transition Component={Contact} />
          }
        />
        <Route
          path='/blog'
          element={
            <Transition Component={Blog} />
          }
        />

        {/* MENU ROUTES */}
        <Route
          path='/menu/pizza'
          element={
            <Transition Component={Pizza} />
          }
        />
        <Route
          path='/menu/burger'
          element={
            <Transition Component={Burger} />
          }
        />
        <Route
          path='/menu/sandwich'
          element={
            <Transition Component={Sandwich} />
          }
        />
        <Route
          path='/menu/pasta'
          element={
            <Transition Component={Pasta} />
          }
        />
        <Route
          path='/menu/shakes'
          element={
            <Transition Component={Shakes} />
          }
        />
        <Route
          path='/menu/fries-sides'
          element={
            <Transition Component={Fries} />
          }
        />
        <Route
          path='/menu/bread'
          element={
            <Transition Component={Breads} />
          }
        />
        <Route
          path='/menu/wraps'
          element={
            <Transition Component={Wraps} />
          }
        />
        <Route
          path='/menu/mini-range'
          element={
            <Transition Component={Mini} />
          }
        />

        {/* POLICY ROUTES */}
        <Route
          path='/privacy-policy'
          element={
            <Transition Component={PrivacyPolicy} />
          }
        />
        <Route
          path='/refund-policy'
          element={
            <Transition Component={RefundPolicy} />
          }
        />
        <Route
          path='/terms-and-conditions'
          element={
            <Transition Component={TermsConditions} />
          }
        />
        <Route
          path='*'
          element={
            <Transition Component={PageNotFound} />
          }
        />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
