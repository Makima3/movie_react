import {SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import {IKeyword} from "../../interfaces";
import {Searching} from "./Searching";
import css from './Search.module.css'
export const SearchForm = () => {
    const {register, handleSubmit, reset} = useForm<IKeyword>()

    const [keyword, setKeyword]= useState<string>()
    const search: SubmitHandler<IKeyword> = (query) =>{
        setKeyword(query.keyword)
        reset()
    }

    return (
        <>
            <div className={css.GeneralInput}>
        <form onSubmit={handleSubmit(search)}>
            <input className={css.Input} type='text' placeholder={'Search...'} {...register('keyword')}/>
            <div><button className={css.Button}>Search movie</button></div>
        </form>
            </div>
            <Searching keyword={keyword}/>

        </>
    );
};

