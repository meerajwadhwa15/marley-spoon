import { FunctionComponent } from "react";
import { useQuery } from "@apollo/client";
import DefaultTemplate from "./../../templates";
import SearchCard from "./../../components/SearchCard";
import ErrorMessage from "./../../components/ErrorMessage";
import Loader from "./../../components/Loader";
import { getRecipesQuery } from "../../../queries/recipes";
import { recipeCollection } from "./../../types/recipe";
import StyledHOC from "./../../helper/styled-hoc";
import style from "./style";

type Props = {
  className: string;
};

const SearchComponent: FunctionComponent<Props> = ({ className }) => {
  const { loading, error, data } = useQuery<recipeCollection, {}>(
    getRecipesQuery
  );

  const items = data?.recipeCollection?.items;
  return (
    <div className={className}>
      <DefaultTemplate>
        {loading ? <Loader /> : null}
        {error ? (
          <ErrorMessage>Error while loading Recipes</ErrorMessage>
        ) : null}
        <div className="items">
          {items
            ? items.map((item) => <SearchCard key={item.sys.id} {...item} />)
            : null}
        </div>
      </DefaultTemplate>
    </div>
  );
};

export default StyledHOC(SearchComponent, style);
