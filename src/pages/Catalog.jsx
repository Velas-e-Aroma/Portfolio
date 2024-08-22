import { useState } from 'react';

import Wallpaper from '../components/Wallpaper';
import FeedCatalog from '../components/FeedCatalog';

export default function Catalog() {
  const imgBase = 'https://via.placeholder.com/300x200?text=Produto+1';
  const [wallpaper, setWallpaper] = useState(imgBase);

  return (
    <div className="w-full bg-white border-[#ccc] border rounded-md mt-[40px]">
      <Wallpaper wallpaper={wallpaper} />
      <FeedCatalog setWallpaper={setWallpaper} />
    </div>
  );
}
