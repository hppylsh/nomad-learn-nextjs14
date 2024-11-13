import { Metadata } from "next"
import "../styles/global.css"
import Movie from "../components/movie";
import styles from "../styles/home.module.css"

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
    return (
        <div className={styles.container}>
            {movie.map((movie) => 
                (<Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}/>

                ))}
        </div>
    );
}

/* 괄호()로 묶은 폴더는 경로를 생성하지 않습니다 */
// useState나 useEffect 없이도 fetch구현가능
