import ItemCategories from './ItemCategories';

export default function BrowseCategories() {
  return (
    <div className="w-full p-4 bg-white border-[#ccc] border rounded-md mt-[40px]">
      <h1 className="font-semibold">Navegue pelas categorias, de A a Z</h1>
      <div className="flex flex-row mt-[20px] gap-4 overflow-x-auto w-full pb-3">
        <ItemCategories title="Verdes" />
        <ItemCategories title="Verdes" />
        <ItemCategories title="Verdes" />
        <ItemCategories title="Verdes" />
        <ItemCategories title="Verdes" />
        <ItemCategories title="Verdes" />
        <ItemCategories title="Verdes" />
        <ItemCategories title="Verdes" />
        <ItemCategories title="Verdes" />
        <ItemCategories title="Verdes" />
        
      </div>
    </div>
  );
}
