import React, { useEffect, useState } from 'react'
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
  const [allArticles, setAllArticles] = useState([]);
  const [summarizedArticle, setSummarizedArticle] = useState()
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  const [copied, setCopied] = useState("");
  let existingArticles = localStorage.getItem('allArticles');
  let existingArticlesArray = existingArticles ? JSON.parse(existingArticles) : [];

  useEffect(() => {
    setAllArticles(existingArticlesArray);
  }, []);

  useEffect(() => {
    if (article.url) {
      existingArticlesArray = [...existingArticlesArray, article];
    }
    localStorage.setItem('allArticles', JSON.stringify(existingArticlesArray));
  }, [article]);
  const previousArticleClick = (item, e) => {
    setArticle(item);
    sendArticle(e);
  }

  async function sendArticle(e) {
    e.preventDefault();
    const { data } = await getSummary({
      articleUrl: article.url
    });
    setSummarizedArticle(data.summary);
    setAllArticles(prevArticles => [
      ...prevArticles,
      { summary: data.summary, url: article.url }
    ]);
  }


  const handleCopy = (item) => {
    setCopied(item)
    navigator.clipboard.writeText(item);
    setTimeout(() => {
      setCopied('')
    }, 2000);
  }

  return (
    <section className='main-section w-1/2 mt-12'>

      <form className='main-section__input w-full relative'
        onSubmit={(e) => sendArticle(e)}
      >
        <input placeholder='Paste the article link' className='w-full url_input rounded-md peer' type='url'
          onChange={(e) => setArticle({ url: e.target.value })} required
        />
        <img src={linkIcon} className='absolute left-2 top-[9px]' />
        <button className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700' type='submit'>
          <p>↵</p>
        </button>
      </form>

      <div className='flex flex-col gap-1 max-h-60 overflow-y-auto mt-2'>
        {allArticles
          .reverse()
          .filter((item, index, array) => array.findIndex(a => a.url === item.url) === index)
          .map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={(e) => previousArticleClick(item, e)}
              className='link_card'
            >
              <div className='copy_btn' onClick={() => handleCopy(item.url)}>
                <img
                  src={copied === item.url ? tick : copy}
                  alt={copied === item.url ? "tick_icon" : "copy_icon"}
                  className='w-[40%] h-[40%] object-contain'
                />
              </div>
              <p className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate'>
                {item.url}
              </p>
            </div>
          ))}
      </div>
      {(summarizedArticle && !(isFetching)) ? <div className='my-10'>
        <Summary summary={summarizedArticle} />
      </div>
        :
        isFetching ? <img src={loader} alt='loader' className='w-20 h-20 object-contain mx-auto mt-12' />
          : error && <p className='font-inter font-bold text-black text-center mt-12'>
            Something went wrong , please try again
          </p>
      }
    </section >
  )
}

export default Demo;