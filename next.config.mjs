/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/why-creative-ai.html', destination: '/why-creative-ai', permanent: true },
      { source: '/pricing.html', destination: '/pricing', permanent: true },
      { source: '/our-story.html', destination: '/our-story', permanent: true },
      { source: '/our-projects.html', destination: '/our-projects', permanent: true },
      { source: '/faqs.html', destination: '/faqs', permanent: true },
      { source: '/careers.html', destination: '/careers', permanent: true },
      { source: '/blog.html', destination: '/blog', permanent: true },
      { source: '/blog-details.html', destination: '/blog-details', permanent: true },
      { source: '/all-industries.html', destination: '/all-industries', permanent: true },
      { source: '/retail-&-commerce.html', destination: '/retail-&-commerce', permanent: true },
      { source: '/financial-services.html', destination: '/financial-services', permanent: true },
      { source: '/healthcare.html', destination: '/healthcare', permanent: true },
      { source: '/manufacturing.html', destination: '/manufacturing', permanent: true },
      { source: '/entertainment.html', destination: '/entertainment', permanent: true },
      { source: '/education.html', destination: '/education', permanent: true },
      { source: '/telecom.html', destination: '/telecom', permanent: true },
      { source: '/energy.html', destination: '/energy', permanent: true },
      { source: '/smbs.html', destination: '/smbs', permanent: true },
      { source: '/enterprise.html', destination: '/enterprise', permanent: true },
      { source: '/entrepreneurs.html', destination: '/entrepreneurs', permanent: true },
      { source: '/privacy-policy.html', destination: '/privacy-policy', permanent: true },
      { source: '/terms-condition.html', destination: '/terms-condition', permanent: true },
    ];
  }
};

export default nextConfig;
