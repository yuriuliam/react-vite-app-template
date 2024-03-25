import { createWebVitalsListener } from '@/data/web-vitals/subjects/createWebVitalsListener'

const reportWebVitals = createWebVitalsListener(data => {
  logger.info({
    name: 'Web Vitals',
    title: data.name,
    content: `Rating: ${data.rating}`,
    data,
    style: 'default',
  })
})

export { reportWebVitals }
