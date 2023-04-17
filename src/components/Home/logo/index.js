import './index.scss'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s.png'


const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap
        .timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1,
        })
        .from(outlineLogoRef.current, {
            drawSVG: 0
            },
            {
            duration: 20,
            drawSVG: "100%"
            })
        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 2,
                duration: 4,
            }
            )
        
    },[])
    return (
        <div className="logo-container" ref={bgRef}>
        <img
            className="solid-logo"
            ref={solidLogoRef}
            src={LogoS}
            alt="S"
        />

    <svg
        width="999pt" 
        height="893pt" 
        version="1.0" 
        viewBox="0 0 999 900" 
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg" 
        >
        <g 
        className="svg-container"
        transform="translate(0.000000,893.000000) scale(0.100000,-0.100000)" 
        fill="#000000" 
        >
        <path 
        ref={outlineLogoRef}
        d="M508 8583 l-3 -168 -216 -3 -216 -2 -6 -4167 c-3 -2291 -4 -4170 -1 -4174 3 -5 593 -9 1311 -9 l1306 0 -6 170 -5 170 141 0 c78 0 180 3 226 7 l84 6 -7 276 c-4 152 -16 627 -26 1056 -11 429 -20 825 -19 880 l1 100 33 -145 c18 -80 153 -671 300 -1315 146 -643 268 -1178 271 -1188 5 -16 56 -17 932 -15 l926 3 41 165 41 165 180 5 179 5 110 440 c61 242 223 896 360 1453 138 557 251 1007 253 999 3 -13 -70 -2656 -83 -3055 l-7 -182 1424 2 1423 3 3 166 2 166 92 7 c50 3 149 6 220 6 l128 0 0 4170 0 4170 -1842 -2 -1843 -3 -36 -140 c-20 -77 -39 -152 -43 -167 l-6 -28 -180 0 c-99 0 -180 -3 -180 -6 0 -11 -841 -3348 -844 -3352 -2 -2 -7 5 -10 15 -7 24 -936 3674 -936 3679 0 2 -781 4 -1735 4 l-1735 0 -2 -167z m4008 -2026 c303 -1192 554 -2170 557 -2173 3 -3 19 -3 36 1 25 5 32 14 40 43 6 20 247 980 536 2132 289 1152 530 2112 536 2133 l10 37 1824 0 1825 0 0 -4155 0 -4155 -1399 0 c-770 0 -1402 3 -1404 8 -3 4 -1 140 4 302 9 315 116 4136 121 4330 l3 115 -35 0 -34 0 -363 -1470 c-537 -2176 -805 -3258 -810 -3273 -4 -10 -193 -12 -916 -10 l-911 3 -538 2370 c-297 1303 -544 2373 -551 2377 -7 5 -23 7 -36 6 -24 -3 -24 -4 -22 -103 2 -120 52 -2138 86 -3504 14 -542 25 -1022 25 -1068 l0 -83 -1285 0 -1285 0 0 4155 0 4155 1718 -2 1717 -3 551 -2168z m-4006 -2162 l0 -3995 1069 0 1068 0 6 -67 c4 -38 7 -110 7 -161 l0 -92 -1288 2 -1287 3 -3 4153 -2 4152 215 0 215 0 0 -3995z m5610 3988 c0 -5 -224 -901 -498 -1993 -437 -1737 -501 -1985 -518 -1988 -17 -2 -27 29 -94 293 l-75 296 424 1692 c233 931 426 1695 428 1700 2 4 78 7 169 7 90 0 164 -3 164 -7z m-3075 -3245 c3 -13 239 -1051 525 -2308 589 -2594 547 -2410 554 -2417 2 -3 335 -7 739 -11 l734 -5 -40 -159 -39 -158 -909 0 c-499 0 -910 4 -913 8 -3 5 -147 632 -320 1393 l-314 1384 -26 1070 c-31 1263 -31 1225 -11 1225 8 0 17 -10 20 -22z m4137 -93 c-2 -61 -29 -1066 -62 -2235 -32 -1169 -60 -2188 -62 -2265 l-3 -140 1193 -3 1192 -2 0 -160 0 -160 -1407 0 -1406 0 6 143 c3 78 25 828 48 1667 l42 1525 213 868 c118 478 214 871 214 873 0 3 8 4 18 2 15 -3 17 -15 14 -113z"/>
        </g>
    </svg>
    </div>
)
}





export default Logo
