"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation(){
    const path = usePathname();
    //Nextjs에서 모든 페이지가 SSR됨
    //hydrate(React가 서버 환경에서 미리 렌더링한 HTML에 연결하는 방식)
    //back-end에서 html로 render되고 front-end에서 hydrate됨

    //console.log("helllo");
    //이런식으로 use client를 사용해도 back-end에서 console.log가 실행됨
    //브라우저는 처음에는 html을 인식하지만 javascript가 로딩되며 react가 활성화됨(증거: 새로고침하지않아도 화면이동이됨)
    
    //"use client"라고 명시된 파일만 hydrate함
    //유저는 다운받아야할 javascript양이 줄어들게 되므로 로딩 속도가 빨라짐
    return(
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link> {path === "/about-us" ? "🔥" : ""}
                </li>
            </ul>
        </nav>
    )
}