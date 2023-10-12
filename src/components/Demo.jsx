import React, { useState } from 'react'
import { copy, linkIcon, loader, tick } from '../assets'

const Demo = () => {
  const [article, setArticle] = useState()
  const [summarizedArticle, setSummarizedArticle] = useState()


  const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${article}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'dfd0d0314amsh741988ddff712c6p1f8585jsn4ef2201fd0ea',
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
  };

  async function sendArticle() {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      setSummarizedArticle(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className='main-section w-1/2 mt-12'>

      <div className='main-section__input w-full relative'>
        <input placeholder='Paste the article link' className='w-full url_input rounded-md peer'
          onChange={(e) => setArticle(e.target.value)}
        />
        <img src={linkIcon} className='absolute left-2 top-[9px]' />
        <button className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700' onClick={() => sendArticle()}>
          <p>↵</p>
        </button>
      </div>
    </section>
  )
}

export default Demo