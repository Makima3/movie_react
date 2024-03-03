import {SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import {IKeyword} from "../../interfaces";
import {Searching} from "./Searching";

export const SearchForm = () => {
    const {register, handleSubmit, reset} = useForm<IKeyword>()

    const [keyword, setKeyword]= useState<string>()
    const search: SubmitHandler<IKeyword> = (query) =>{
        setKeyword(query.keyword)
        reset()
    }

    return (
        <>
        <form onSubmit={handleSubmit(search)} >
            <input type='text' placeholder={'Search...'} {...register('keyword')}/>
            <button>Search movie</button>
        </form>
            <Searching keyword={keyword}/>
        </>
    );
};

