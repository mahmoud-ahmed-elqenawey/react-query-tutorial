import axios from "axios";
import { useQuery } from "react-query";

export const RQSuperHeroesPage = () => {
    const fetchSuperHeroes = () => {
        return axios.get("http://localhost:3001/superheroes");
    };
    const { isLoading, data, isError, error } = useQuery(
        "super-heroes",
        fetchSuperHeroes
    );

    console.log(data, "data");

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>{error.message}</h2>;
    }

    return (
        <>
            <h2>React Query Super Heroes Page</h2>
            {data?.data.map((hero) => (
                <div key={hero.name}>{hero.name}</div>
            ))}
        </>
    );
};
