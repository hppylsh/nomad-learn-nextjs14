import { Suspense } from "react"
import MovieInfo from "../../../components/movie-info"
import MovieVideos from "../../../components/movie-video"

import moviestyle from "../../../styles/movie-info.module.css"


export default async function MovieDetail({params:{id}}:{params:{id:string}}){
    //console.log(props);
    
    // step1
    //const movie = await getMovie(id);
    //const video = await getVideos(id);

    // step2. 병렬적으로 fetch 작업을 시작하기위해 Promise.all을 시작함
    //const [movie, video] = await Promise.all([getMovie(id), getVideos(id)]);

    // step3. component로 분리 후 render
    //suspense를 사용하면 component의 로딩상태를 분리할 수 있다
    return (<>
        <h3>Movie detail page</h3>
        <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id}/>
        </Suspense>
    </>)
}

/* params는 [] 대괄호 안의 값을 key로 넘어온다 
movies/123?region=kr
일때 console.log 값
params: { id: '123' }, searchParams: { region: 'kr' }
*/