import RecipeDetail from "./../../src/container/RecipeDetail";
import { NextPage } from "next";

interface Props {
  id: string;
}

const RecipeDetailPage: NextPage<Props> = ({ id }) => {
  return (
    <div>
      <RecipeDetail recipeId={id} />
    </div>
  );
};

RecipeDetailPage.getInitialProps = async ({ query: { id } }: any) => {
  return { id };
};

export default RecipeDetailPage;
