import { Metadata } from "next"

export const metadata:Metadata = {
    title: 'Home',
}

export default function Page(){
    return (<>
        <h1>Hello!</h1>
    </>)
}

/* 괄호()로 묶은 폴더는 경로를 생성하지 않습니다 */