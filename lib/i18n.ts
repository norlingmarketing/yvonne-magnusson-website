import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming locale is valid
  if (!locale || !['en', 'sv'].includes(locale)) {
    notFound();
  }
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});