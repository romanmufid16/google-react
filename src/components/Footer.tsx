const Footer = () => {
    return (
        <footer className="bg-slate-100 text-black mt-8 h-24">
            <div className="container mx-auto border-b border-slate-300">
                <p className="px-5 py-2">Indonesia</p>
            </div>
            <div className="container px-5 py-2 flex flex-col md:flex-row justify-between items-center">
                <div className="space-x-4">
                    <a href="#">Tentang</a>
                    <a href="#">Periklanan</a>
                    <a href="#">Bisnis</a>
                    <a href="#">Cara kerja penelusuran</a>
                </div>
                <div className="space-x-4">
                    <a href="#">Privasi</a>
                    <a href="#">Persyaratan</a>
                    <a href="#">Setelan</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer