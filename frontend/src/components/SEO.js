import { useEffect } from 'react';

const SEO = ({ title, description, url }) => {
  useEffect(() => {
    document.title = title;

    const updateMeta = (selector, attribute, value) => {
      let element = document.querySelector(selector);

      if (element) {
        element.setAttribute(attribute, value);
      }
    };

    updateMeta('meta[name="description"]', 'content', description);
    updateMeta('meta[property="og:title"]', 'content', title);
    updateMeta('meta[property="og:description"]', 'content', description);
    updateMeta('meta[property="og:url"]', 'content', url);
    updateMeta('link[rel="canonical"]', 'href', url);
  }, [title, description, url]);

  return null;
};

export default SEO;