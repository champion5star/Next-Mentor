import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';
import { createIntroductionEmail } from '../src/contact.ts';

test('contact email preserves names, plans, and multiline goals safely', () => {
  const data = new FormData();
  data.set('name', 'Alex & Jamie');
  data.set('email', 'alex@example.com');
  data.set('plan', 'Career Mentorship · 6 months');
  data.set('goal', 'Build confidence\nPractice C++ & React?');
  const result = new URL(createIntroductionEmail(data));
  assert.equal(result.pathname, 'jw2318692@gmail.com');
  assert.equal(result.searchParams.get('subject'), 'Mentoring introduction — Alex & Jamie');
  assert.match(result.searchParams.get('body'), /Practice C\+\+ & React\?/);
  assert.match(result.searchParams.get('body'), /Career Mentorship · 6 months/);
  assert.equal([...result.searchParams].length, 2);
});

test('React renders every section and updates the contact plan from each option', async () => {
  const dom = new JSDOM('<!doctype html><div id="root"></div>', { url: 'http://localhost/' });
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  globalThis.HTMLElement = dom.window.HTMLElement;
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  const server = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom' });
  let root;
  try {
    const { createElement, act } = await import('react');
    const { createRoot } = await import('react-dom/client');
    const { default: App } = await server.ssrLoadModule('/src/App.tsx');
    root = createRoot(document.getElementById('root'));
    await act(async () => root.render(createElement(App)));
    for (const id of ['main', 'approach', 'journey', 'mentorship', 'faq', 'contact']) {
      assert.ok(document.getElementById(id), `Missing ${id}`);
    }
    assert.match(document.body.textContent, /fluent spoken English/);
    const select = document.getElementById('plan');
    for (const [index, plan] of ['Career Launch · 1 month', 'Career Mentorship · 6 months', 'Ongoing Support'].entries()) {
      await act(async () => document.querySelectorAll('.plan .button')[index].click());
      assert.equal(select.value, plan);
    }
    await act(async () => {
      select.value = 'Let’s find the right fit';
      select.dispatchEvent(new dom.window.Event('change', { bubbles: true }));
    });
    assert.equal(select.value, 'Let’s find the right fit');
    for (const img of document.images) {
      assert.ok(img.alt);
      await readFile(new URL(`../public/${img.getAttribute('src')}`, import.meta.url));
    }
    for (const link of document.querySelectorAll('a[href^="#"]')) {
      const href = link.getAttribute('href');
      assert.ok(href === '#' || document.getElementById(href.slice(1)), `Broken link ${href}`);
    }
  } finally {
    if (root) {
      const { act } = await import('react');
      await act(async () => root.unmount());
    }
    await server.close();
    dom.window.close();
    delete globalThis.window;
    delete globalThis.document;
    delete globalThis.HTMLElement;
    delete globalThis.IS_REACT_ACT_ENVIRONMENT;
  }
});
