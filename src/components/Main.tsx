import { useState } from "react";
import axios from "axios";

// Tipe data untuk hasil pencarian dari Google API
interface SearchResult {
    title: string;
    snippet: string;
    link: string;
}

function Main() {
    const [query, setQuery] = useState<string>(''); // Tipe string untuk query
    const [results, setResults] = useState<SearchResult[]>([]); // Tipe array of SearchResult untuk hasil pencarian
    const [loading, setLoading] = useState<boolean>(false); // Tipe boolean untuk status loading

    // Ganti dengan API Key dan CX (Custom Search Engine ID) Anda
    const API_KEY = import.meta.env.VITE_API_KEY;
    const CX = import.meta.env.VITE_CX;

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    // Fungsi untuk menangani pencarian
    const handleSearch = async () => {
        if (!query.trim()) return;  // Jangan lakukan pencarian jika query kosong

        setLoading(true);
        try {
            const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
                params: {
                    key: API_KEY,
                    cx: CX,
                    q: query
                }
            });

            // Menyimpan hasil pencarian
            setResults(response.data.items || []);
        } catch (error) {
            console.error('Error searching Google API:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex-grow flex flex-col justify-center items-center min-h-72">
            <div className="mb-8">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="Google logo" className="max-w-xs" />
            </div>
            <div className="container mx-auto flex justify-center mb-6">
                <div className="w-[720px] px-10 sm:px-0 relative">
                    <input
                        type="text"
                        className="pl-10 border-2 rounded-full hover:shadow-md min-w-full p-2 focus:ring-transparent focus:outline-none"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search Google"
                        onKeyDown={handleKeyDown}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute top-1/2 sm:left-3 left translate-x-1/2 sm:translate-x-0 transform -translate-y-1/2 w-5 h-5 text-slate-400" onClick={handleSearch}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div>

            {loading && <div>Loading...</div>}

            <div className="container flex flex-col justify-center items-center gap-4 p-10">
                {results.length > 0 && !loading && (
                    <div className="max-w-3xl">
                        {results.map((result, index) => (
                            <div key={index} className="rounded-md p-4 shadow-md my-2 hover:shadow-lg transition-all duration-300 border border-slate-300">
                                <a href={result.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-lg">{result.title}</a>
                                <p className="text-gray-600">{result.snippet}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="container mx-auto flex justify-center items-center gap-3 text-sm">
                <p>Google tersedia dalam bahasa:</p>
                <a href="#" className="text-blue-800 hover:underline">English</a>
                <a href="#" className="text-blue-800 hover:underline">Basa Bali</a>
            </div>
        </div>
    );
}

export default Main;
