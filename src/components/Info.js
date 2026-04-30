export default function Info() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 mt-16 md:mt-24 text-[10px] md:text-[11px] leading-6 tracking-[0.15em] text-neutral-400 font-mono uppercase" style={{ fontFamily: '"Menlo", "Monaco", monospace' }}>
      <div className="mb-4">ABOUT</div>
      <div className="space-y-6">
        <p>
          SUDHANSHU YADAV IS A VISUAL ARTIST AND GRAPHIC DESIGNER, SPECIALISING IN ART DIRECTION AND DESIGN FOR THE MUSIC AND ENTERTAINMENT INDUSTRIES.
        </p>
        <p>
          AFTER EARNING A DIPLOMA IN GRAPHIC DESIGN AT COLLEGE IN 2015, HE WENT ON TO COMPLETE A BA (HONS) IN DIGITAL MEDIA AT FALMOUTH UNIVERSITY IN 2020.
        </p>
        <p>
          SUDHANSHU HAS BEEN WORKING AS A FREELANCE DESIGNER SINCE 2017, BUILDING A PORTFOLIO OF WORK INCLUDING ALBUM ARTWORKS, MUSIC VIDEO & FILM TITLES, MERCHANDISE, ADVERTISING CAMPAIGNS, LOGOS, AND CREATIVE DIRECTION. HE HAS 5 YEARS OF EXPERIENCE IN DESIGN.
        </p>
        <p>
          HIS PORTFOLIO INCLUDES WORK FOR ARTIST SUCH AS POST MALONE, SKRILLEX, MS. LAURYN HILL, AND LIL BABY. WORK WITH LEADING MUSIC LABELS INCLUDING UNIVERSAL MUSIC GROUP, ATLANTIC RECORDS, INTERSCOPE, AND REPUBLIC RECORDS. HIS CLIENT BASE ALSO INCLUDES BRANDS LIKE AMAZON PRIME VIDEO, ARSENAL FC, META, AND OAKLEY. A FULL LIST OF CLIENTS CAN BE FOUND <span className="text-white hover:underline cursor-pointer">HERE</span>.
        </p>
      </div>

      <div className="mt-12 mb-4">social Media</div>
      <div className="flex flex-wrap gap-4 md:gap-6 text-neutral-400">
        <a href="https://www.instagram.com/sdymoondesign?utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transition-colors border-b border-neutral-600 hover:border-white pb-0.5">Instagram</a>
        <a href="https://www.threads.com/@sdymoondesign?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transition-colors border-b border-neutral-600 hover:border-white pb-0.5">threads</a>
        <a href="https://x.com/sdymoondesign?s=21" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transition-colors border-b border-neutral-600 hover:border-white pb-0.5">X (Twitter)</a>
        <a href="https://www.behance.net/sdymoondesign" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transition-colors border-b border-neutral-600 hover:border-white pb-0.5">Behance</a>
      </div>
    </div>
  );
}
