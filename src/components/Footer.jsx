import React from 'react';

const Footer = () => {
  const onSubmitHandler = (event) =>{
    event.preventDefault();
 }
  return (
    <div className='bg-black'>
      <footer className="border-t border-t-white mt-[40px]">
        <div className="flex flex-col gap-5 px-[24px] sm:px-[80px] pt-[40px]">
            <div className="mb-[10px]">
                <p className="text-18 text-white font-normal mb-[20px] max-w-[400px]">Sign up to receive email updates on latest news, available prints and more.</p>
                <form onSubmit={onSubmitHandler} className="w-full">
                    <div className="sm:flex">
                        <div className="mb-[10px] md:mb-0 mr-[8px] w-full md:w-[400px]">
                            <div className="relative mb-[3.5px] input-container w-full">
                              <input id="email" type="text" placeholder="Enter email address" required data-testid="test-email" aria-labelledby="email" autoComplete="off" className="h-[54px] px-[16px] text-white text-16 w-full outline-0 border font-inter hide_tap rounded-[8px] focus:border-brand_primary bg-black" name="email"/></div>
                        </div>
                        <div className="flex md:block justify-center">
                          <button className="bg-red-600 font-inter font-semibold bg-accent text-white h-[54px] w-[160px] rounded-[8px]">Subscribe</button></div>
                    </div>
                </form>
            </div>
            <div className="flex justify-between items-center pb-[20px]">
                <div className="flex flex-row sm:flex-row">
                  <div>
                  <p className='text-xl font-medium mb-5 text-white'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-white'>
                      <li>+234-705-338-8153</li>
                      <li>frankstudios.com</li>
                    </ul>
                  </div>
                  <a href="https://www.instagram.com/frank_stud.io?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="shrink-0 w-[26px] mr-[20px]">
                  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_465_2721)">
                                <path
                                    d="M14.5832 5.41663H14.5915M5.83317 1.66663H14.1665C16.4677 1.66663 18.3332 3.53211 18.3332 5.83329V14.1666C18.3332 16.4678 16.4677 18.3333 14.1665 18.3333H5.83317C3.53198 18.3333 1.6665 16.4678 1.6665 14.1666V5.83329C1.6665 3.53211 3.53198 1.66663 5.83317 1.66663ZM13.3332 9.47496C13.436 10.1685 13.3176 10.8768 12.9946 11.4991C12.6717 12.1215 12.1608 12.6261 11.5345 12.9414C10.9083 13.2566 10.1985 13.3663 9.50633 13.2549C8.81411 13.1435 8.17464 12.8167 7.67887 12.3209C7.1831 11.8252 6.85628 11.1857 6.74489 10.4935C6.63351 9.80125 6.74323 9.09154 7.05844 8.46527C7.37366 7.839 7.87833 7.32808 8.50066 7.00516C9.12299 6.68224 9.8313 6.56378 10.5248 6.66663C11.2323 6.77153 11.8872 7.10118 12.3929 7.60688C12.8986 8.11258 13.2283 8.76752 13.3332 9.47496Z"
                                    stroke="white" strokeWidth="2" strokeLinecap="round" stroke-line="true" join="round">
                                </path>
                            </g>
                            <defs>
                                <clippath id="clip0_465_2721">
                                    <rect width="20" height="20" fill="white"></rect>
                                </clippath>
                            </defs>
                        </svg>
                      </a>
                        <a href="https://x.com/franksudios?s=11" target="_blank" rel="noreferrer"className="shrink-0 w-[26px] mr-[20px]"><svg viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-[26px] mr-[20px]">
                            <path d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45155C17.9652 6.27577 17.9613 6.09608 17.9535 5.9203C18.7566 5.33955 19.4496 4.62021 20 3.79608C19.2521 4.12883 18.458 4.34615 17.6449 4.44061C18.5011 3.92742 19.1421 3.12123 19.4492 2.17147C18.6438 2.6488 17.763 2.98551 16.8445 3.16718C16.2257 2.50963 15.4075 2.07426 14.5164 1.92838C13.6253 1.78249 12.711 1.93421 11.9148 2.36008C11.1186 2.78595 10.4848 3.46225 10.1115 4.28443C9.73825 5.1066 9.64619 6.02885 9.84961 6.90858C8.21874 6.82674 6.62328 6.40309 5.16665 5.66508C3.71002 4.92708 2.42474 3.8912 1.39414 2.6246C0.870333 3.5277 0.710047 4.59637 0.945859 5.61341C1.18167 6.63045 1.79589 7.51954 2.66367 8.09999C2.01219 8.07931 1.37498 7.9039 0.804688 7.58827V7.63905C0.804104 8.58679 1.13175 9.50549 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8276 2.85999 11.8517 2.2457 11.7328C2.50788 12.5479 3.01798 13.2607 3.70481 13.7719C4.39164 14.2831 5.22093 14.5672 6.07695 14.5844C4.62369 15.7259 2.82848 16.3451 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.282C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"fill="white"></path>
                        </svg>
                        </a>
                      <div className='w-5'>
                      <a href="https://www.linkedin.com/in/anigbo-chukwubudike-arts-92aaa8222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" className="shrink-0 w-[26px] mr-[20px]">
                      <svg xmlns="http://www.w3.org/2000/svg" className='text-white' width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
                      </a>
                      </div>
                    </div>
                  <button>
                      <a href="/#home">
                      <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[50px] cursor-pointer">
                        <path fillRule="evenodd" clipRule="evenodd" d="M29.9125 16.8744H28.2557H28.2554C28.2554 20.9404 26.5946 23.4154 24.6992 24.894C22.7612 26.406 20.5487 26.8965 19.5098 26.8965V28.5537C20.9029 28.5537 23.4776 27.9489 25.7186 26.2006C26.6648 25.4624 27.5469 24.5236 28.2555 23.3504V41.1289H29.9127V23.3504C30.6213 24.5236 31.5034 25.4624 32.4496 26.2006C34.6906 27.9489 37.2652 28.5537 38.6584 28.5537V26.8965C37.6195 26.8965 35.407 26.406 33.4689 24.894C31.5736 23.4154 29.9128 20.9404 29.9128 16.8744H29.9125Z" fill="white"></path>
                        <rect x="1.24286" y="-1.24286" width="55.5143" height="55.5143" rx="27.7571" transform="matrix(1 0 0 -1 0 55.5143)" stroke="#F6F6F6" strokeWidth="2.48571"></rect>
                      </svg>
                      </a>
                  </button>                  
            </div>
            <div className="border-t border-t-white">
                <p className="text-14 sm:text-16 text-white text-center font-inter font-normal">©2024 Frank Studios. All rights Reserved</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
