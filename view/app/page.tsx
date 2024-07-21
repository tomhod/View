import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-900 text-white">
      <header className="text-3xl mb-8">Dangerous </header>
      
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Haunted Image 1 */}
        <div className="bg-gray-800 rounded-lg p-4 shadow-md">
          <img src="https://i.imgur.com/7vusW4L.jpg" alt="Haunted Image 1" className="rounded-lg w-full h-auto" />
          <div className="mt-2">
            <h3 className="text-xl font-bold">Haunted House</h3>
            <p className="text-sm">A chilling presence lurks within this decrepit mansion, where restless spirits are said to roam the halls.</p>
          </div>
        </div>

        {/* Haunted Image 2 */}
        <div className="bg-gray-800 rounded-lg p-4 shadow-md">
          <img src="https://i.imgur.com/LHcGG5G.jpg" alt="Haunted Image 2" className="rounded-lg w-full h-auto" />
          <div className="mt-2">
            <h3 className="text-xl font-bold">Ghostly Forest</h3>
            <p className="text-sm">In the dense fog of this haunted forest, whispers of lost souls echo among the twisted trees.</p>
          </div>
        </div>

        {/* Haunted Image 3 */}
        <div className="bg-gray-800 rounded-lg p-4 shadow-md">
          <img src="https://i.imgur.com/5abD5J1.jpg" alt="Haunted Image 3" className="rounded-lg w-full h-auto" />
          <div className="mt-2">
            <h3 className="text-xl font-bold">Cursed Doll</h3>
            <p className="text-sm">This ancient doll is said to harbor a malevolent spirit, its eyes glowing with an unnatural light.</p>
          </div>
        </div>
      </section>

      <footer className="text-center mt-8 text-sm">
        © 2024 Haunted Dashboard. All rights reserved.
      </footer>
    </main>
  );
}
