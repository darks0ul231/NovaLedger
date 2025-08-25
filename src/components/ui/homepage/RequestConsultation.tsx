'use client';

import { useState } from 'react';
import { HiChat, HiX, HiPhone, HiMail } from 'react-icons/hi';

export default function RequestConsultation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl cursor-pointer"
        aria-label="Open support menu"
      >
        {isOpen ? (
          <HiX className="h-6 w-6" />
        ) : (
          <HiChat className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="fixed bottom-20 right-6 z-50 w-72 overflow-hidden rounded-xl bg-white shadow-xl">
            <div className="bg-blue-600 p-4 text-white">
              <h3 className="font-semibold">Request a Consultation?</h3>
              <p className="text-sm opacity-90">Get a Consultation now.</p>
            </div>

            <div className="p-3">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-100"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <HiPhone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Call Support</p>
                  <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                </div>
              </a>

              <a
                href="mailto:support@yourcompany.com"
                className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-100"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <HiMail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Send an Email</p>
                  <p className="text-sm text-gray-600">support@novaledger.com</p>
                </div>
              </a>

              <button
                onClick={() => alert('Chat widget would open here!')}
                className="flex w-full items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-100"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <HiChat className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Live Chat</p>
                  <p className="text-sm text-gray-600">Start a conversation</p>
                </div>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}