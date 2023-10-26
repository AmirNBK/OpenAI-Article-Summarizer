import React, { useState } from 'react'
import { copy, linkIcon, loader, tick } from '../assets'
import { useLazyGetSummaryQuery } from '../services/article'

const Demo = () => {
  const [article, setArticle] = useState()
  const [summarizedArticle, setSummarizedArticle] = useState()

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();


  async function sendArticle(e) {
    e.preventDefault();
    const { data } = getSummary({
      articleUrl: article
    })

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