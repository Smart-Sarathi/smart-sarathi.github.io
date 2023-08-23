import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import './App.css';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import BlogLinks from './components/BlogLinks';
import TestimonialCard from './components/TestimonialCard';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <FeatureSection />
      <BlogLinks />
      <TestimonialCard />
      {/* Add more sections as needed */}
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <App />
      </main>
    </Layout>
  );
}
