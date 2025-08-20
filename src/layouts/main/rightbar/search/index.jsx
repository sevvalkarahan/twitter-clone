import { useRef, useState } from "react";
import { useClickAway } from 'react-use';

export default function Search() {

    const [query, setQuery] = useState('')
    const [focus, setFocus] = useState(false)

    const ref = useRef()
    useClickAway(ref, () => {
        setFocus(false)
    });

    return (
        <div
            ref={ref}
            className="min-h-[2rem] h-[3.313rem] mb-3 flex items-center sticky top-0 bg-[color:var(--background-primary)] z-10"
        >
            <label className="h-[2.688rem] rounded-full  w-full relative group border border-transparent  focus-within:border-[#1d9bf0]">
                <div className="w-[3.5rem] h-full flex items-center justify-center absolute top-0 left-0 pointer-events-none">
                    <svg
                        viewBox="0 0 24 24"
                        className="h-[1.172rem] min-w-[2rem] text-[color:var(--color-base-secondary)] group-focus-within:text-[color:var(--color-primary)]"
                    >
                        <path
                            fill="currentColor"
                            d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
                        />
                    </svg>
                </div>
                <input
                    type="text"
                    placeholder="Ara"
                    className="w-full h-full bg-transparent rounded-full outline-none pl-[3.5rem]"
                    value={query}
                    onFocus={() => setFocus(true)}
                    onChange={e => setQuery(e.target.value)}
                />
                {(query && focus) && (
                    <button
                        type="button"
                        onClick={() => setQuery('')}
                        className="w-[22px] h-[22px] rounded-full bg-[color:var(--color-primary)] flex items-center justify-center text-black min-w-[22px] absolute top-1/2 -translate-y-1/2 right-3"
                    >
                        <svg viewBox="0 0 24 24" width={22} height={22} >
                            <path
                                fill="#fff"
                                d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm3.71 12.54l-1.42 1.42-2.29-2.3-2.29 2.3-1.42-1.42 2.3-2.29-2.3-2.29 1.42-1.42 2.29 2.3 2.29-2.3 1.42 1.42-2.3 2.29 2.3 2.29z"
                            />
                        </svg>
                    </button>
                )}
            </label>
            {focus && (
                <div
                    className="absolute w-[350px] top-full -left-px -translate-y-1 bg-[color:var(--background-primary)] shadow-box max-h-[calc(80vh-53px)] rounded-lg text-center min-h-[100px]">
                    <p className="p-3 pt-5 text-[color:var(--color-base-secondary)] leading-5">
                        Kişileri, listeleri veya anahtar kelimeleri aramayı dene
                    </p>
                </div>
            )}
        </div>
    )
}