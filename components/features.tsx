'use client'

import { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import FeaturesBg from '@/public/images/features-bg.png';
import FeaturesElement from '@/public/images/features-element.png';

export default function Features() {
  const [tab, setTab] = useState<number>(1);
  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) {
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
    }
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Sample Chatbots</h1>
            <p className="text-xl text-gray-600">
              Here are some simple works of us that you can try.
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
           
            <div className="w-full md:col-span-7 lg:col-span-6 mb-8 md:mb-0">
              <iframe
                title="Dialogflow Messenger"
                width={500}
                height={400}
                src="https://console.dialogflow.com/api-client/demo/embedded/55cda1d1-1a51-4624-9b56-68d2f4f684fc"
                frameBorder="0"
                style={{ border: 'none' }}
              ></iframe>
            </div>
            <div className="w-full md:col-span-7 lg:col-span-6 mb-8 md:mb-0">
              <iframe
                title="Dialogflow Messenger"
                width={500}
                height={400}
                src="https://console.dialogflow.com/api-client/demo/embedded/b47e6d7e-6859-4cbb-9bf0-f1c83ea18c6b"
                frameBorder="0"
                style={{ border: 'none' }}
              ></iframe>
            
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
