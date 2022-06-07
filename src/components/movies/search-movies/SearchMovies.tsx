import React from "react";
import { Input, Paper, Row } from "../../base";
import { BiSearchAlt } from "react-icons/bi";
import { PrimaryButton } from "../../shared/button";
import { useState } from "react";
import { SearchMoviesProps } from "./types";

const SearchMovies = ({ fetchByQuery }: SearchMoviesProps) => {
    const [query, setQuery] = useState<string>('')

    return <Paper className="p-3">
        <Row>
            <Input
                label="Search"
                placeholder="e.g. Taxi Driver"
                className="w-full"
                value={query}
                Icon={<BiSearchAlt />}
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={(e) => e.key === 'Enter' ? fetchByQuery(query) : null}
            />
            <PrimaryButton className="mt-4" onClick={() => fetchByQuery(query)}>
                Search
            </PrimaryButton>
        </Row>
    </Paper>
}

export default SearchMovies
