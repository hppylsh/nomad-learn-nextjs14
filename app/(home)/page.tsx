import { Metadata } from "next"
import Link from "next/link";

export const metadata:Metadata = {
    title: 'Home',
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies(){
    //await new Promise((resolve)=> setTimeout(resolve,5000)); //loading.tsx테스트
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage(){
    const movie = await getMovies();
    return (<>
        <div>{movie.map(movie => 
            <li key={movie.id}>
                <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>)}</div>
    </>)
}

/* 괄호()로 묶은 폴더는 경로를 생성하지 않습니다 */
// useState나 useEffect 없이도 fetch구현가능
