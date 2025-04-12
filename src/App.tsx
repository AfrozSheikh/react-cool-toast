import { useToast } from './hooks/useToast';

function App() {
  const toast = useToast();

  return (
    <div className="h-screen flex items-center justify-center">
      <button
        className="bg-slate-800 text-white px-4 py-2 rounded-lg"
        onClick={() => toast.stone('You Clicked on button !')}
      >
        Drop Stone
      </button>
    </div>
  );
}


export default App;
