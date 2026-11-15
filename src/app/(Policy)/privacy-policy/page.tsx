import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar/>
    <HeadBanner title='Privacy Policy' />

<div className='w-full bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto flex flex-col gap-0'>
 <div className="mb-8">
        <p className="text-gray-700 text-md leading-relaxed">
          Confab 360 Degree™ ("we," "our," or "us") values your privacy and is committed to safeguarding your personal data. 
          This Privacy Policy outlines how we collect, use, share, and protect the information collected through our website and services.
        </p>
      </div>

      {/* Information We Collect */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">Information We Collect</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              <strong>Personal Information:</strong> Name, email, contact details, company or university affiliation when you sign up or register.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              <strong>Usage Data:</strong> Information on how you use our website, including IP addresses, browser types, and access times.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              <strong>Transaction Information:</strong> Details of the services you purchase, including payment methods and billing information.
            </span>
          </li>
        </ul>
      </section>

      {/* How We Use Your Information */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">How We Use Your Information</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              To provide access to our training programs, services, and resources.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              To process payments and fulfill registrations or orders.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              To send important updates, newsletters, and promotional materials.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              For research and analytics to improve our services and user experience.
            </span>
          </li>
        </ul>
      </section>

      {/* Sharing Your Information */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">Sharing Your Information</h2>
        <p className="text-gray-700 text-md leading-relaxed mb-4">
          We do not sell or rent your data. However, your information may be shared:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              With trusted partners involved in delivering our programs and services.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              To comply with legal obligations or protect our rights.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              With payment gateways and third-party services to facilitate transactions.
            </span>
          </li>
        </ul>
      </section>

      {/* Your Rights and Choices */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">Your Rights and Choices</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              Access, correct, or delete personal data upon request.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              Unsubscribe from our newsletters or promotional emails.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              Withdraw consent at any time where applicable.
            </span>
          </li>
        </ul>
      </section>

      {/* Data Security */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">Data Security</h2>
        <p className="text-gray-700 text-md leading-relaxed">
          We employ appropriate technical and organizational measures to protect your data from unauthorized access, disclosure, or loss.
        </p>
      </section>

      {/* Cookies */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">Cookies</h2>
        <p className="text-gray-700 text-md leading-relaxed">
          Our website uses cookies to provide a better user experience and analyze traffic. You can manage cookie preferences through your browser settings.
        </p>
      </section>

      {/* Changes to This Policy */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">Changes to This Policy</h2>
        <p className="text-gray-700 text-md leading-relaxed">
          We reserve the right to modify this Privacy Policy. Updates will be posted on our website, and your continued use of our services implies acceptance of these changes.
        </p>
      </section>

      {/* Contact Information */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">Contact Us</h2>
        <p className="text-gray-700 text-md leading-relaxed">
          If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at{' '}
          <a href="mailto:privacy@confab360degree.com" className="text-blue-600 underline hover:text-blue-800">
            privacy@confab360degree.com
          </a>{' '}
          or call{' '}
          <a href="tel:+91-7011560479" className="text-blue-600 underline hover:text-blue-800">
            +91-7011560479
          </a>.
        </p>
      </section>

</div>

    </>
  )
}

export default PrivacyPolicy