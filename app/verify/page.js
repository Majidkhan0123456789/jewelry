 'use client';
import { useState } from 'react';

export default function VerifyPage() {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    if (files.length <= 3) {
      setImages([...files]);
    } else {
      alert('You can upload a maximum of 3 images.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white shadow-md rounded-lg p-6 md:p-8 w-full ">
        <h1 className="text-xl font-semibold text-[#682A2A] mb-4">Verify Report</h1>
        <form className="space-y-4 w-full">
            <div className="flex md:space-x-6 space-y-4 md:space-y-0"> 
          <div className="md:w-1/2 ">
            <label htmlFor="refNo" className="block text-sm font-medium text-gray-700">
              Ref. No.
            </label>
            <input
              type="text"
              id="refNo"
              name="refNo"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-[#682A2A] focus:border-[#682A2A]"
            />
          </div>
          <div className="md:w-1/2">
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
              Weight (grams)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-[#682A2A] focus:border-[#682A2A]"
            />
          </div>
          </div>
          <div className="flex md:space-x-6 space-y-4 md:space-y-0"> 
          <div className="md:w-1/2">
            <label htmlFor="means" className="block text-sm font-medium text-gray-700">
              Means (mm)
            </label>
            <input
              type="number"
              id="means"
              name="means"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-[#682A2A] focus:border-[#682A2A]"
            />
          </div>
          <div className="md:w-1/2">
            <label htmlFor="shapeCut" className="block text-sm font-medium text-gray-700">
              Shape & Cut
            </label>
            <input
              type="text"
              id="shapeCut"
              name="shapeCut"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-[#682A2A] focus:border-[#682A2A]"
            />
          </div>
          </div>
          <div className="flex md:space-x-6 space-y-4 md:space-y-0"> 
          <div className="md:w-1/2">
            <label htmlFor="color" className="block text-sm font-medium text-gray-700">
              Color
            </label>
            <input
              type="text"
              id="color"
              name="color"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-[#682A2A] focus:border-[#682A2A]"
            />
          </div>
          <div className="md:w-1/2">
            <label htmlFor="refractiveIndex" className="block text-sm font-medium text-gray-700">
              Refractive Index
            </label>
            <input
              type="number"
              id="refractiveIndex"
              name="refractiveIndex"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-[#682A2A] focus:border-[#682A2A]"
            />
          </div>
          </div>
          <div className="flex md:space-x-6 space-y-4 md:space-y-0"> 
          <div className="md:w-1/2">
            <label htmlFor="specificGravity" className="block text-sm font-medium text-gray-700">
              Specific Gravity
            </label>
            <input
              type="number"
              id="specificGravity"
              name="specificGravity"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-[#682A2A] focus:border-[#682A2A]"
            />
          </div>
          <div className="md:w-1/2">
            <label htmlFor="species" className="block text-sm font-medium text-gray-700">
              Species
            </label>
            <input
              type="text"
              id="species"
              name="species"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-[#682A2A] focus:border-[#682A2A]"
            />
          </div>
          </div>
          <div className="md:w-full">
            <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
              Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              rows="3"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-[#682A2A] focus:border-[#682A2A]"
            />
          </div>

          {/* Microscopic Observations - Full width */}
          <div className="w-full">
            <label htmlFor="microscopicObr" className="block text-sm font-medium text-gray-700">
              Microscopic Observations
            </label>
            <input
              type="text"
              id="microscopicObr"
              name="microscopicObr"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-[#682A2A] focus:border-[#682A2A]"
            />
          </div>

          {/* Image Upload */}
          <div className="w-full">
            <label htmlFor="images" className="block text-sm font-medium text-gray-700">
              Upload Images (Max 3)
            </label>
            <input
              type="file"
              id="images"
              name="images"
              accept="image/*"
              onChange={handleImageChange}
              multiple
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-[#682A2A] focus:border-[#682A2A]"
            />
            <div className="mt-2 text-sm text-gray-600">
              {images.length > 0 && (
                <ul>
                  {Array.from(images).map((image, index) => (
                    <li key={index} className="mt-1">
                      {image.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#682A2A] text-white px-4 py-2 rounded-md hover:bg-[#5a2020] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
