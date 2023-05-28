import React from 'react'

const City = () => {
  return (
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Parking by City</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">ParkMobile is making parking easier in over 3,000 locations across all major cities in India.</p>
        </div>

        <div class="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src="https://res.cloudinary.com/learncodewithrk/image/upload/v1685267179/carparking%20website/parking_ixmb77.png" alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Delhi</p>
                            <p class="mt-px text-sm text-gray-600">Best Location</p>
                        </div>
                        <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Online Maps and Apps: Make use of popular online mapping services like Google Maps, Apple Maps, or dedicated parking apps like ParkWhiz, ParkMobile, or SpotHero. These platforms often provide information about nearby parking facilities, their locations, and sometimes even availability.</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src="https://res.cloudinary.com/learncodewithrk/image/upload/v1685267179/carparking%20website/parking_ixmb77.png" alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Mumbai</p>
                            <p class="mt-px text-sm text-gray-600">Best Location</p>
                        </div>
                        <svg class="block w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Local Authority Websites: Check the official website of your city or local municipality. They may have information on public parking lots, garages, or on-street parking locations in your area.</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src="https://res.cloudinary.com/learncodewithrk/image/upload/v1685267179/carparking%20website/parking_ixmb77.png" alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Bengaluru</p>
                            <p class="mt-px text-sm text-gray-600">Best Location</p>
                        </div>
                        <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Parking Guidance Systems: In some cities, there are parking guidance systems that provide real-time information about available parking spaces. Look for parking signs or electronic boards that display parking availability and directions.</p>
                </div>
            </div>

            </div>

           

           

    </div>
</section>

  )
}

export default City