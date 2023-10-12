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

  async function sendArticle(e) {
    e.preventDefault();
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

      <form className='main-section__input w-full relative'
        onSubmit={(e) => sendArticle(e)}
      >
        <input placeholder='Paste the article link' className='w-full url_input rounded-md peer' type='url'
          onChange={(e) => setArticle(e.target.value)} required
        />
        <img src={linkIcon} className='absolute left-2 top-[9px]' />
        <button className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700' type='submit'>
          <p>↵</p>
        </button>
      </form>
    </section>
  )
}

export default Demo