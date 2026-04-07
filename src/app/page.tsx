import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>SaaS Training Platform</title>
        <meta
          name="description"
          content="Coming soon: Create, sell, and manage your online courses effortlessly."
        />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-800">
        <h1 className="text-5xl font-bold">SaaS Training Platform</h1>
        <p className="mt-4 text-lg">
          Coming soon: Create, sell, and manage your online courses effortlessly.
        </p>
        <div className="mt-8 flex space-x-4">
          <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white rounded-md"
          >
            Learn More
          </a>
          <a
            href="#"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}
