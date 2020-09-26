import { useLazyQuery } from "@apollo/client";
import { useEffect, FunctionComponent } from "react";
import DefaultTemplate from "./../../templates";
import Loader from "./../../components/Loader";
import Badge from "./../../components/Badge";
import ErrorMessage from "./../../components/ErrorMessage";
import { getRecipeDetailQuery } from "../../../queries/recipes";
import { recipeDetail } from "./../../types/recipe";
import StyledHOC from "./../../helper/styled-hoc";
import style from "./style";

type Props = {
  recipeId: string;
  className: string;
};

type QueryProps = {
  recipe: recipeDetail;
};

type QueryVariablesProps = {
  id: string;
};

const RecipeDetail: FunctionComponent<Props> = ({ recipeId, className }) => {
  const [loadRecipe, { loading, error, data }] = useLazyQuery<
    QueryProps,
    QueryVariablesProps
  >(getRecipeDetailQuery, {
    variables: {
      id: recipeId,
    },
  });

  useEffect(() => {
    if (recipeId) {
      loadRecipe();
    }
  }, [recipeId]);

  const recipe = data?.recipe;

  return (
    <DefaultTemplate>
      {loading ? <Loader /> : null}
      {error ? <ErrorMessage>Error while loading Recipe</ErrorMessage> : null}
      {recipe ? (
        <div className={className}>
          <h1>{recipe.title}</h1>
          {recipe.tagsCollection.items.map((tag) => (
            <Badge key={tag.sys.id}>{tag.name}</Badge>
          ))}
          {recipe?.chef?.name ? (
            <div className="author">By: {recipe.chef.name}</div>
          ) : null}

          <div className="image-wrapper">
            <img src={recipe.photo.url} alt={recipe.photo.title} />
          </div>
          <p>{recipe.description}</p>
        </div>
      ) : null}
    </DefaultTemplate>
  );
};

export default StyledHOC(RecipeDetail, style);
