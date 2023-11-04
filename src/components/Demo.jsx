import React, { useState } from 'react'
import { copy, linkIcon, loader, tick } from '../assets'
import { useLazyGetSummaryQuery } from '../services/article'
import Summary from './Summary'

const Demo = () => {
  const [article, setArticle] = useState(
    {
      url: '',
      summary: ''
    }
  )
  const [allArticles, setAllArticles] = useState()
  const [summarizedArticle, setSummarizedArticle] = useState()
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();


  async function sendArticle(e) {
    e.preventDefault();
    const { data } = await getSummary({
      articleUrl: article
    });
    setSummarizedArticle(data.summary)
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

      {summarizedArticle ? <div className='my-10'>
        <Summary summary={summarizedArticle} />
      </div>
        :
        isFetching ? <img src={loader} alt='loader' className='w-20 h-20 object-contain mx-auto mt-12' />
          : error && <p className='font-inter font-bold text-black text-center mt-12'>
            Something went wrong , please try again
          </p>
      }
    </section>
  )
}

export default Demo