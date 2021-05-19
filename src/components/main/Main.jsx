import React, {useEffect, useState} from 'react';
import styles from './main.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import RepoItem from "./RepoItem";
import {setCurrentPage} from "../../reducers/reposReducer";
import {createPages} from "../../utils/pagesCreator";

export const Main = React.memo( () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const currentPage = useSelector(state => state.repos.currentPage)
    const totalCount = useSelector(state => state.repos.totalCount)
    const perPage = useSelector(state => state.repos.perPage)
    const isFetchError = useSelector(state => state.repos.isFetchError)
    const [searchValue, setSearchValue] = useState("")
    const pagesCount = Math.ceil(totalCount/perPage)
    const pages = []
    createPages(pages, pagesCount, currentPage)

    useEffect(() => {
        if (!!searchValue) {
            dispatch(getRepos(searchValue, currentPage, perPage))
        }
    }, [currentPage, dispatch, perPage])

    const onSearchHandler = () => {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue, currentPage, perPage))
    }

    return (
        <div>
            { isFetchError &&
                <div role="alert">
                    Oops something went wrong
                </div>
            }
            <header className={styles.search}>
                <h1> FIND REPOSITORY </h1>
                <div className={styles.searchBlock}>
                    <input
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      type="text"
                      placeholder="Input repo name"
                      className={styles.searchInput} />
                    <button onClick={() => onSearchHandler()} className={styles.searchBtn}>Search</button>
                </div>
            </header>
            {
                isFetching === false ?
                <section className={styles.reposSection}>
                    {repos.map( (repo) =>
                        <RepoItem
                          key={repo.id}
                          repo={repo}
                        />
                    )}
                </section> :
              <section className={styles.sectionLoader}>
                  <span className={styles.loaderBars}><span></span></span>
                  Loading...
              </section>
            }

            <footer className={styles.pages}>
                { pages.map((page, index) => <span
                    key={index}
                    className={currentPage === page ? styles.currentPage : styles.page}
                    onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)
                }
            </footer>
        </div>
    );
});

export default Main;
