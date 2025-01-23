'use client';
import About from './components/About';

import Intro from './components/Intro';
import Skills from './components/Skills';

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <Skills />
    </main>
  );
}
