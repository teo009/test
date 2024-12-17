const TopSection = (): JSX.Element => {
  return (
    <div className="w-[88%] h-32 flex justify-between items-center">
      <div className="flex flex-col items-end">
        <span className="text-3xl">Teodoro Obando</span>
        <span className="text-lg">Full stack developer</span>
      </div>
      <button 
        className="w-auto h-[42px] bg-light rounded-3xl px-4 text-dark text-lg hover:bg-dark hover:border-2 border-light hover:text-light"
        onClick={() => alert('Upps, estamos en reconstrucción, We will be back soon :,D')}
      >
        Contact me :,D
      </button>
    </div>
  );
}

export default TopSection;
